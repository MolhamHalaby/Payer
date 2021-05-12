
namespace Payer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/MailsMessages"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MailsMessagesRow))]
    public class MailsMessagesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/MailsMessages/MailsMessagesIndex.cshtml");
        }
    }
}