
namespace Payer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Tips"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TipsRow))]
    public class TipsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Tips/TipsIndex.cshtml");
        }
    }
}