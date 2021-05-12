
namespace Payer.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.MailsMessages")]
    [BasedOnRow(typeof(Entities.MailsMessagesRow), CheckNames = true)]
    public class MailsMessagesForm
    {
        public String Body { get; set; }
        public String Subject { get; set; }
        public Int32 CustomerId { get; set; }
    }
}