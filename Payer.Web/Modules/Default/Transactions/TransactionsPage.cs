
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

    [RoutePrefix("Default/Transactions"), Route("{action=index}")]
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

        [HttpPost]
        public ActionResult PayButton()
        {
          
            return View("~/Modules/Default/Transactions/TransactionsIndex.cshtml");
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