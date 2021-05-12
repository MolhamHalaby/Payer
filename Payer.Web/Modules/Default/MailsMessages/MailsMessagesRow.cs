
namespace Payer.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[MailsMessages]")]
    [DisplayName("Mails Messages"), InstanceName("Mails Messages")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MailsMessagesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Body"), QuickSearch]
        public String Body
        {
            get { return Fields.Body[this]; }
            set { Fields.Body[this] = value; }
        }

        [DisplayName("Subject")]
        public String Subject
        {
            get { return Fields.Subject[this]; }
            set { Fields.Subject[this] = value; }
        }

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Customer"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerClubMember")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Customer Club Member"), Expression("jCustomer.[ClubMember]")]
        public String CustomerClubMember
        {
            get { return Fields.CustomerClubMember[this]; }
            set { Fields.CustomerClubMember[this] = value; }
        }

        [DisplayName("Customer Person Id"), Expression("jCustomer.[PersonId]")]
        public Int32? CustomerPersonId
        {
            get { return Fields.CustomerPersonId[this]; }
            set { Fields.CustomerPersonId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Body; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MailsMessagesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Body;
            public StringField Subject;
            public Int32Field Id;
            public Int32Field CustomerId;

            public StringField CustomerClubMember;
            public Int32Field CustomerPersonId;
        }
    }
}
