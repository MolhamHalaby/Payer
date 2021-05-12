
namespace Payer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Persons"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PersonsRow))]
    public class PersonsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Persons/PersonsIndex.cshtml");
        }
    }
}