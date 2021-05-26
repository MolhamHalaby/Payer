
namespace Payer.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Tips")]
    [BasedOnRow(typeof(Entities.TipsRow), CheckNames = true)]
    public class TipsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public DateTime Date { get; set; }
        public Int32 WaiterId { get; set; }
        public Double Value { get; set; }
        public string PullTip { get; set; }
    }
}