
namespace Payer.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Waiters")]
    [BasedOnRow(typeof(Entities.WaitersRow), CheckNames = true)]
    public class WaitersForm
    {
        public Int32 UserId { get; set; }
        public Int32 PersonId { get; set; }
    }
}