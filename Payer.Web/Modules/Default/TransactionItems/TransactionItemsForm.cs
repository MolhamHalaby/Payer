
namespace Payer.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TransactionItems")]
    [BasedOnRow(typeof(Entities.TransactionItemsRow), CheckNames = true)]
    public class TransactionItemsForm
    {
        public Int32 TransactionId { get; set; }
        public Int32 ItemId { get; set; }
        public Int32 CustomerId { get; set; }
        public Double TotalPaid { get; set; }
    }
}