
namespace Payer.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TransactionItems")]
    [BasedOnRow(typeof(Entities.TransactionItemsRow), CheckNames = true)]
    public class TransactionItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
      //  public String TransactionQrCode { get; set; }
        public String ItemName { get; set; }
        //public String CustomerClubMember { get; set; }
        public Double TotalPaid { get; set; }
    }
}