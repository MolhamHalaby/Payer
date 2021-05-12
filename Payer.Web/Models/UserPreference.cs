namespace Payer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class UserPreference
    {
        public int UserPreferenceId { get; set; }

        public long UserId { get; set; }

        [Required]
        [StringLength(100)]
        public string PreferenceType { get; set; }

        [Required]
        [StringLength(200)]
        public string Name { get; set; }

        public string Value { get; set; }
    }
}
