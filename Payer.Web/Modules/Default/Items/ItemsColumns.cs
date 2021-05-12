
namespace Payer.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Items")]
    [BasedOnRow(typeof(Entities.ItemsRow), CheckNames = true)]
    public class ItemsColumns
    {
        [EditLink]
        public String Name { get; set; }
        public Double Price { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
    }
}