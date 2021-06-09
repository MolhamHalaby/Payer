
namespace Payer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;
    using Payer.Models;
    using Newtonsoft.Json;
    using System;
    using System.Drawing;
    using System.Drawing.Imaging;
    using System.IO;
    using ZXing;
    using Payer.Default.Entities;
    using Serenity.Data;
    using System.Collections.Generic;
    using System.Data.SqlClient;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Data.Entity;

    [RoutePrefix("Default/Tips"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TipsRow))]
    public class TipsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Tips/TipsIndex.cshtml");
        }

        //Pulling tip amount from Tips table via data base that relates to the specific waiter.   
        public ActionResult Pull(int Id)  
        {
            var x = new Tip();
            
            using (var db = new DBModel())
            {
                var m = db.Tips.Where(t => t.WaiterId == Id).FirstOrDefault();
                if (m != null)
                {
                    m.Value = 0;
                    m.Date = DateTime.Now;
                    db.Entry(m).State = EntityState.Modified;
                    db.SaveChanges();
                    
                }
                 else
                  {
                    
                    Response.Write(@"<script language='javascript'>alert('Waiter not found \n" + "Please try again!');</script>");
                    Response.Write(@"<script language='javascript'>window.open(URL, name, specs, replace)alert('Waiter not found \n" + "Please try again!');</script>");
                    
                }

            }

                return View(MVC.Views.Default.Tips.TipsIndex);
    
        }

    }
}