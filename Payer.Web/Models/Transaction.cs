namespace Payer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Transaction
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Transaction()
        {
            TransactionItems = new List<TransactionItem>();
        }

        public int CustomerTableId { get; set; }

        public int? NoOfCustomers { get; set; }

        public string QrCode { get; set; }

        public string DealNum { get; set; }

        public int WaiterId { get; set; }

        public int ItemId { get; set; }

        public int Id { get; set; }

        public DateTime Created { get; set; }

        public DateTime? Closed { get; set; }

        public virtual CustomerTable CustomerTable { get; set; }

        public virtual Item Item { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual List<TransactionItem> TransactionItems { get; set; }

        public virtual Waiter Waiter { get; set; }
    }
}
