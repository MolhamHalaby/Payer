
namespace Payer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;


    [RoutePrefix("Default/CustomerTables"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerTablesRow))]
    public class CustomerTablesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CustomerTables/CustomerTablesIndex.cshtml");
        }

       

    }
}