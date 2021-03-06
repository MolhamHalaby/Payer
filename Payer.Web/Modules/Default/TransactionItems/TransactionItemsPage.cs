
namespace Payer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TransactionItems"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TransactionItemsRow))]
    public class TransactionItemsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TransactionItems/TransactionItemsIndex.cshtml");
        }
    }
}