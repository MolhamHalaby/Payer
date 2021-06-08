
namespace Payer.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Enter UserName")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Enter Password"), Required(true)]
        public string Password { get; set; }
    }
}