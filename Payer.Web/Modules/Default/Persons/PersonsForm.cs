
namespace Payer.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Persons")]
    [BasedOnRow(typeof(Entities.PersonsRow), CheckNames = true)]
    public class PersonsForm
    {
        public String Name { get; set; }
        public DateTime Birthday { get; set; }
        public String Phone { get; set; }
        public String Address { get; set; }
        public String Email { get; set; }
    }
}