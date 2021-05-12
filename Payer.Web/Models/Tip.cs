namespace Payer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Tip
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public int WaiterId { get; set; }

        public double Value { get; set; }

        public virtual Waiter Waiter { get; set; }
    }
}
