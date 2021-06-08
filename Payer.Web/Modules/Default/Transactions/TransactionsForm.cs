
namespace Payer.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Transactions")]
    [BasedOnRow(typeof(Entities.TransactionsRow), CheckNames = true)]
    public class TransactionsForm
    {
        public Int32 CustomerTableId { get; set; }
        public Int32 NoOfCustomers { get; set; }
     //   public String QrCode { get; set; }
      //  public String DealNum { get; set; }
        public Int32 WaiterId { get; set; }
        //public Int32 ItemId { get; set; }
        public DateTime Created { get; set; }
        public DateTime Closed { get; set; }
    }
}