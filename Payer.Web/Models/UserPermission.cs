namespace Payer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class UserPermission
    {
        public long UserPermissionId { get; set; }

        public int UserId { get; set; }

        [Required]
        [StringLength(100)]
        public string PermissionKey { get; set; }

        public bool Granted { get; set; }

        public virtual User User { get; set; }
    }
}
