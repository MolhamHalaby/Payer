
namespace Payer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Items"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ItemsRow))]
    public class ItemsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Items/ItemsIndex.cshtml");
        }
    }
}