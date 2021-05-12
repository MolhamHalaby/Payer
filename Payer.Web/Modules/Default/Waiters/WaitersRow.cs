
namespace Payer.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Waiters]")]
    [DisplayName("Waiters"), InstanceName("Waiters")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class WaitersRow : Row, IIdRow
    {
        [DisplayName("User Id"), NotNull]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Person"), NotNull, ForeignKey("[dbo].[Persons]", "Id"), LeftJoin("jPerson"), TextualField("PersonName")]
        public Int32? PersonId
        {
            get { return Fields.PersonId[this]; }
            set { Fields.PersonId[this] = value; }
        }

        [DisplayName("Person Name"), Expression("jPerson.[Name]")]
        public String PersonName
        {
            get { return Fields.PersonName[this]; }
            set { Fields.PersonName[this] = value; }
        }

        [DisplayName("Person Birthday"), Expression("jPerson.[Birthday]")]
        public DateTime? PersonBirthday
        {
            get { return Fields.PersonBirthday[this]; }
            set { Fields.PersonBirthday[this] = value; }
        }

        [DisplayName("Person Phone"), Expression("jPerson.[Phone]")]
        public String PersonPhone
        {
            get { return Fields.PersonPhone[this]; }
            set { Fields.PersonPhone[this] = value; }
        }

        [DisplayName("Person Address"), Expression("jPerson.[Address]")]
        public String PersonAddress
        {
            get { return Fields.PersonAddress[this]; }
            set { Fields.PersonAddress[this] = value; }
        }

        [DisplayName("Person Email"), Expression("jPerson.[Email]")]
        public String PersonEmail
        {
            get { return Fields.PersonEmail[this]; }
            set { Fields.PersonEmail[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WaitersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserId;
            public Int32Field Id;
            public Int32Field PersonId;

            public StringField PersonName;
            public DateTimeField PersonBirthday;
            public StringField PersonPhone;
            public StringField PersonAddress;
            public StringField PersonEmail;
        }
    }
}
