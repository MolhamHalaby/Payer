
namespace Payer.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Transactions")]
    [BasedOnRow(typeof(Entities.TransactionsRow), CheckNames = true)]
    public class TransactionsColumns
    {
        public Int32 CustomerTableId { get; set; }
        public Int32 NoOfCustomers { get; set; }
        [EditLink]
        public String QrCode { get; set; }
        public String DealNum { get; set; }
        public Int32 WaiterId { get; set; }
        //public String ItemName { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public DateTime Created { get; set; }
        public DateTime Closed { get; set; }
        public string GenerateQrCode { get; set; }
    }
}