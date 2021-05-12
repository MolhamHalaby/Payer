
namespace Payer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Customers"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomersRow))]
    public class CustomersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Customers/CustomersIndex.cshtml");
        }
    }
}