
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

      // [HttpPost]
        public ActionResult PayButton(String itemName)
        {
            var sss = "dsfg";
            // var transItem = new TransactionItem();
            // transItem.CustomerId = 25;
            // transItem.Id = 2;
            //  transItem.TransactionId = 3;

            /*  var transaction = new Transaction();

              using (var db = new DBModel())
              {

                  transaction = await db.Transactions
                      .Include(t => t.TransactionItems)
                      .Include(t => t.TransactionItems.Select(ti => ti.Item))
                      .FirstOrDefaultAsync(t => t.Id == 3);

              }*/
            // var tra = new TransactionItem();

            // tra.CustomerId = 25;
            ViewBag.hi = itemName;

            //return Json(true);
             return PartialView(MVC.Views.Default.Transactions.PayButton);
            //return PartialView("~/Modules/Default/Transactions/PayButton.cshtml");
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