namespace Payer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class RolePermission
    {
        public long RolePermissionId { get; set; }

        public int RoleId { get; set; }

        [Required]
        [StringLength(100)]
        public string PermissionKey { get; set; }

        public virtual Role Role { get; set; }
    }
}
