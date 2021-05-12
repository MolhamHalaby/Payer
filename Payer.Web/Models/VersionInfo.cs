namespace Payer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("VersionInfo")]
    public partial class VersionInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long Version { get; set; }

        public DateTime? AppliedOn { get; set; }

        [StringLength(1024)]
        public string Description { get; set; }
    }
}
