namespace Payer.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Exception
    {
        public long Id { get; set; }

        public Guid GUID { get; set; }

        [Required]
        [StringLength(50)]
        public string ApplicationName { get; set; }

        [Required]
        [StringLength(50)]
        public string MachineName { get; set; }

        public DateTime CreationDate { get; set; }

        [Required]
        [StringLength(100)]
        public string Type { get; set; }

        public bool IsProtected { get; set; }

        [StringLength(100)]
        public string Host { get; set; }

        [StringLength(500)]
        public string Url { get; set; }

        [StringLength(10)]
        public string HTTPMethod { get; set; }

        [StringLength(40)]
        public string IPAddress { get; set; }

        [StringLength(100)]
        public string Source { get; set; }

        [StringLength(1000)]
        public string Message { get; set; }

        public string Detail { get; set; }

        public int? StatusCode { get; set; }

        public string SQL { get; set; }

        public DateTime? DeletionDate { get; set; }

        public string FullJson { get; set; }

        public int? ErrorHash { get; set; }

        public int DuplicateCount { get; set; }
    }
}
