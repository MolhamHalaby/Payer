
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
    using Payer.Models;
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
        public async Task<ActionResult> UpdateTable(int tranId)
        {
            var transaction = new Transaction();

             using (var db = new DBModel())
             {

                transaction = await db.Transactions
                    .Include(t => t.TransactionItems)
                    .Include(t => t.TransactionItems.Select(ti => ti.Item))
                    .FirstOrDefaultAsync(t => t.Id == tranId);
                return Content(JsonConvert.SerializeObject(transaction, new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                    NullValueHandling = NullValueHandling.Ignore
                }));

            }
         
        }

        // Saving tip amount for specific waiter in Tips table via data base after clicking on pay button
        [HttpPost]
        public ActionResult PayButton(float tip,int waiterForTip)
        {
            var x = new Tip();
            using (var db = new DBModel())
            {
                var m = db.Tips.Where(t => t.WaiterId == waiterForTip).FirstOrDefault();
                if(m!=null)
                {
                    m.Value = m.Value + tip;
                    m.Date = DateTime.Now;
                    db.Entry(m).State = EntityState.Modified;
                    db.SaveChanges();
                }
                else
                {
                    
                    x.Value = tip;
                    x.WaiterId = waiterForTip;
                    x.Date = DateTime.Now;
                    db.Tips.Add(x);                   
                    db.Entry(x).State = EntityState.Added;
                    db.SaveChanges();
                }

            }
           
            
            ViewBag.Amount = 5;
            ViewBag.Phone = 6;
             return View(MVC.Views.Default.Transactions.PayButton);

        }
        // Display payment page to let custmer entering his card details.
        public ActionResult PayButton(int phone,int customerAmount)
        {
            ViewBag.Phone = phone;
            ViewBag.Amount = customerAmount;
            return View(MVC.Views.Default.Transactions.PayButton);
        }
        // Updating TransactionItems table after check/unCheck a new Item
        [HttpPost]
        public JsonResult checkNewItem(int phone , String itemName, int tranId,int flag,int tranItemId)
        {
            
             using(var db= new DBModel())
             {

                if (flag == 0)
                {
                    var m = db.TransactionItems.Where(t => t.Item.Name == itemName)
                       .Where(ti => ti.TransactionId == tranId).Where(tt => tt.CustomerId == phone).Where(ttt => ttt.Id==tranItemId).FirstOrDefault();

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
                    var m = db.TransactionItems.Where(t => t.Item.Name == itemName)
                      .Where(ti => ti.TransactionId == tranId).Where(tt => tt.CustomerId == null).Where(ttt => ttt.Id == tranItemId).FirstOrDefault();

                    if (m != null)
                    {

                        m.CustomerId = phone;
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
        public JsonResult SendEmailToCustomer(String Email,String Amount)
        {

            MailMessage mail = new MailMessage();
            mail.From = new MailAddress("hmwlhm@gmail.com");
            mail.To.Add(Email);
            mail.Subject = "QR PAYER RECIEPT";
              mail.Body = "Hello,\n You Are Charged In The Amount: " + Amount;

            SmtpClient smtpMail = new SmtpClient("smtp.gmail.com");
            smtpMail.UseDefaultCredentials = false;
            smtpMail.Port = 587;
            smtpMail.Credentials = new NetworkCredential("hmwlhm@gmail.com", "311154322");
            smtpMail.EnableSsl = true;
            smtpMail.DeliveryMethod = SmtpDeliveryMethod.Network;
                        // and then send the mail
            smtpMail.Send(mail);   
            return Json(true);    
        }
        //Display Generating QR Code
        public ActionResult DisplayQrCode(int id)   
        {
            //this is the generic link
            //var payerUrl = $"~/Default/Transactions/Pay?id={id}";

            //this is the specific link for the localhost
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