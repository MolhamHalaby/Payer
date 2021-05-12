
namespace Payer.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CustomerTables")]
    [BasedOnRow(typeof(Entities.CustomerTablesRow), CheckNames = true)]
    public class CustomerTablesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 Number { get; set; }
        public Int32 Places { get; set; }
        public Boolean Accessible { get; set; }
    }
}