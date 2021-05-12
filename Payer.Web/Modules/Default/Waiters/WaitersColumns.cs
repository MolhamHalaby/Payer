
namespace Payer.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Waiters")]
    [BasedOnRow(typeof(Entities.WaitersRow), CheckNames = true)]
    public class WaitersColumns
    {
        public Int32 UserId { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String PersonName { get; set; }
    }
}