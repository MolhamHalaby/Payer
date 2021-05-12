
namespace Payer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Waiters"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WaitersRow))]
    public class WaitersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Waiters/WaitersIndex.cshtml");
        }
    }
}