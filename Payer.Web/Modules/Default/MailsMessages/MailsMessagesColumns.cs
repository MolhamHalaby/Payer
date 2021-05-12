
namespace Payer.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.MailsMessages")]
    [BasedOnRow(typeof(Entities.MailsMessagesRow), CheckNames = true)]
    public class MailsMessagesColumns
    {
        [EditLink]
        public String Body { get; set; }
        public String Subject { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String CustomerClubMember { get; set; }
    }
}