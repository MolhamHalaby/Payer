namespace Payer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Language
    {
        public int Id { get; set; }

        [Required]
        [StringLength(10)]
        public string LanguageId { get; set; }

        [Required]
        [StringLength(50)]
        public string LanguageName { get; set; }
    }
}
