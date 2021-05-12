
namespace Payer.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Tips")]
    [BasedOnRow(typeof(Entities.TipsRow), CheckNames = true)]
    public class TipsForm
    {
        public DateTime Date { get; set; }
        public Int32 WaiterId { get; set; }
        public Double Value { get; set; }
    }
}