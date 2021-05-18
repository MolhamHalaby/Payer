namespace Payer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class TransactionItem
    {
        public int Id { get; set; }

        public int TransactionId { get; set; }

        public int ItemId { get; set; }

        public int? CustomerId { get; set; }

        public double? TotalPaid { get; set; }


        public virtual Item Item { get; set; }

        public virtual Transaction Transaction { get; set; }
    }
}
