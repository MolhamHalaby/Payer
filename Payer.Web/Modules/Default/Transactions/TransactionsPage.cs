
namespace Payer.Default.Pages
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.Web;
    using System;
    using System.Drawing;
    using System.Drawing.Imaging;
    using System.IO;
    using System.Web.Mvc;
    using ZXing;
    using Payer.Default.Entities;
    using Serenity.Data;
    using System.Collections.Generic;
    using System.Data.SqlClient;
    using Payer.Models;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Data.Entity;
    using System.Net.Mail;
    using System.Windows.Forms;
    using System.Configuration;
    using System.Net.Mime;
    using System.Net;
    using System.Web;
   
    [RoutePrefix("Default/Transactions"), Route("{action=Index}")]
    [PageAuthorize(typeof(Entities.TransactionsRow))]
    public class TransactionsController : Controller
    {
        public ActionResult Index()
        {
            
            return View("~/Modules/Default/Transactions/TransactionsIndex.cshtml");
        }
        //Opening the page that contain table of items wich related to the same transaction
        // and where the customers can split the bill between them.
        public async Task<ActionResult> Pay(int id)
        {
            var transaction = new Transaction();

            using (var db = new DBModel())
            {
                
                transaction = await db.Transactions
                    .Include(t => t.TransactionItems)
                    .Include(t => t.TransactionItems.Select(ti => ti.Item))
                    .FirstOrDefaultAsync(t => t.Id == id);
                
            }
            return View(MVC.Views.Default.Transactions.Pay, transaction);//here we pass the model to the view
        }
       //Updating html table for all the customers that are opening the same page every few seconds.
        public async Task<ActionResult> UpdateTable(int TranId)
        {
            var transaction = new Transaction();

             using (var db = new DBModel())
             {

                transaction = await db.Transactions
                    .Include(t => t.TransactionItems)
                    .Include(t => t.TransactionItems.Select(ti => ti.Item))
                    .FirstOrDefaultAsync(t => t.Id == TranId);
                return Content(JsonConvert.SerializeObject(transaction, new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                    NullValueHandling = NullValueHandling.Ignore
                }));

            }
         
        }

        // Saving tip amount for specific waiter in Tips table via data base after clicking on pay button
        [HttpPost]
        public ActionResult PayButton(float Tip,int WaiterForTip)
        {
            var x = new Tip();
            using (var db = new DBModel())
            {
                var m = db.Tips.Where(t => t.WaiterId == WaiterForTip).FirstOrDefault();
                if(m!=null)
                {
                    m.Value = m.Value + Tip;
                    m.Date = DateTime.Now;
                    db.Entry(m).State = EntityState.Modified;
                    db.SaveChanges();
                }
                else
                {
                    
                    x.Value = Tip;
                    x.WaiterId = WaiterForTip;
                    x.Date = DateTime.Now;
                    db.Tips.Add(x);                   
                    db.Entry(x).State = EntityState.Added;
                    db.SaveChanges();
                }

            }
           
            return View(MVC.Views.Default.Transactions.PayButton);

        }
        // Display payment page to let custmer entering his card details.
        public ActionResult PayButton(int? Phone,int? CustomerAmount)
        {
            ViewBag.Phone = Phone;
           
                ViewBag.Amount = CustomerAmount;
            return View(MVC.Views.Default.Transactions.PayButton);
        }
        // Updating TransactionItems table after check/unCheck a new Item
        [HttpPost]
        public JsonResult CheckNewItem(int Phone , String ItemName, int TranId,int Flag,int TranItemId)
        {
            
             using(var db= new DBModel())
             {

                if (Flag == 0)
                {
                    var m = db.TransactionItems.Where(t => t.Item.Name == ItemName)
                       .Where(ti => ti.TransactionId == TranId).Where(tt => tt.CustomerId == Phone).Where(ttt => ttt.Id==TranItemId).FirstOrDefault();

                    if (m != null)
                    {
                      
                        m.CustomerId = null;
                        db.Entry(m).State = EntityState.Modified;
                        db.SaveChanges();

                        return Json(true);
                    }
                    else
                        return Json(false);

                }
                else
                {
                    var m = db.TransactionItems.Where(t => t.Item.Name == ItemName)
                      .Where(ti => ti.TransactionId == TranId).Where(tt => tt.CustomerId == null).Where(ttt => ttt.Id == TranItemId).FirstOrDefault();

                    if (m != null)
                    {

                        m.CustomerId = Phone;
                        db.Entry(m).State = EntityState.Modified;
                        db.SaveChanges();

                        return Json(true);
                    }
                    else
                        return Json(false);
                }

            }

          

           
        }
        // Sending Email to customer after payment process
       
        public JsonResult SendEmailToCustomer(string Email,int Amount,string CustomerName,int CusPhoneNumber)
        {
            try
            {                
                if (ModelState.IsValid)
                {
                    var senderEmail = new MailAddress("hmwlhm@gmail.com", "noreply@QRpayer.com");
                    var receiverEmail = new MailAddress(Email);
                    var password = "311154322";
                    var sub = "QR PAYER RECIEPT - Payment Successful";
                    var body = "Hello " + CustomerName + ",\nYou Are Charged In The Amount: " + Amount + "$" + "\n\nThank You"; 
                    var smtp = new SmtpClient
                    {
                        Host = "smtp.gmail.com",
                        Port = 587,
                        EnableSsl = true,
                        DeliveryMethod = SmtpDeliveryMethod.Network,
                        UseDefaultCredentials = false,
                        Credentials = new NetworkCredential(senderEmail.Address, password)
                    };
                    using (var mess = new MailMessage(senderEmail, receiverEmail)
                    {
                        Subject = sub,
                        Body = body
                    })
                    {
                        smtp.Send(mess);
                    }
                    
                }
            }
            catch (System.FormatException)
            {
                return Json(false);
            }
            //////////////////////////////Deleting items from TransactionItems table 
            using (var db = new DBModel())
            {

                var m = db.TransactionItems.Where(t => t.CustomerId == CusPhoneNumber).FirstOrDefault();
                var tranId = m.TransactionId;
                while (m != null)
                {
                    db.Entry(m).State = EntityState.Deleted;
                    db.SaveChanges();

                    m = db.TransactionItems.Where(t => t.CustomerId == CusPhoneNumber).FirstOrDefault();
                }

                var transactionItem = db.TransactionItems.Where(t => t.TransactionId == tranId).FirstOrDefault();
                if (transactionItem == null)
                {
                    var transaction = db.Transactions.Where(t => t.Id == tranId).FirstOrDefault();
                    db.Entry(transaction).State = EntityState.Deleted;
                    db.SaveChanges();
                }

            }
                return Json(true);


        }
        //Display Generating QR Code
        public ActionResult DisplayQrCode(int id)   
        {
            var payerUrl = $"http://localhost:54989/Default/Transactions/Pay?id={id}";
            ViewBag.Base64QRCode = GetQCCodeBase64(payerUrl);
            return View(MVC.Views.Default.Transactions.QRViewer);
        }

        //Creating qrCode Image that contains url to the Pay page.
        private string GetQCCodeBase64(string qrContent)
        {
            var QCwriter = new BarcodeWriter();
            QCwriter.Format = BarcodeFormat.QR_CODE;
            var result = QCwriter.Write(qrContent);
            var barcodeBitmap = new Bitmap(result);

            using (MemoryStream memory = new MemoryStream())
            {

                barcodeBitmap.Save(memory, ImageFormat.Jpeg);
                byte[] bytes = memory.ToArray();
                string base64String = Convert.ToBase64String(bytes, 0, bytes.Length);
                return "data:image/png;base64," + base64String;

            }


        }

    }
}