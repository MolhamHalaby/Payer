
namespace Payer.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CustomerTables")]
    [BasedOnRow(typeof(Entities.CustomerTablesRow), CheckNames = true)]
    public class CustomerTablesForm
    {
        public Int32 Number { get; set; }
        public Int32 Places { get; set; }
        public Boolean Accessible { get; set; }
    }
}