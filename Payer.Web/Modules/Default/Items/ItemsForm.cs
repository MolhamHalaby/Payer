
namespace Payer.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Items")]
    [BasedOnRow(typeof(Entities.ItemsRow), CheckNames = true)]
    public class ItemsForm
    {
        public String Name { get; set; }
        public Double Price { get; set; }
    }
}