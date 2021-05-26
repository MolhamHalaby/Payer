
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

    [RoutePrefix("Default/Transactions"), Route("{action=Index}")]
    [PageAuthorize(typeof(Entities.TransactionsRow))]
    public class TransactionsController : Controller
    {
        public ActionResult Index()
        {
            
            return View("~/Modules/Default/Transactions/TransactionsIndex.cshtml");
        }

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

            //return View(transaction);
        }


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
        public ActionResult PayButton(int phone,int customerAmount)
        {
            ViewBag.Phone = phone;
            ViewBag.Amount = customerAmount;
            return View(MVC.Views.Default.Transactions.PayButton);
        }

        [HttpPost]
        public JsonResult checkNewItem(int phone , String itemName, int tranId,int flag)
        {
            
             using(var db= new DBModel())
             {

                if (flag == 0)
                {
                    var m = db.TransactionItems.Where(t => t.Item.Name == itemName)
                       .Where(ti => ti.TransactionId == tranId).Where(tt => tt.CustomerId == phone).FirstOrDefault();

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
                      .Where(ti => ti.TransactionId == tranId).Where(tt => tt.CustomerId == null).FirstOrDefault();

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


        public ActionResult DisplayQrCode(int id)
        {
            //this is the generic link
            //var payerUrl = $"~/Default/Transactions/Pay?id={id}";

            //this is the specific link for the localhost
            var payerUrl = $"http://localhost:54989/Default/Transactions/Pay?id={id}";
            ViewBag.Base64QRCode = GetQCCodeBase64(payerUrl);
            return View(MVC.Views.Default.Transactions.QRViewer);
        }


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