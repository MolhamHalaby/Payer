
namespace Payer.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CustomerTables]")]
    [DisplayName("Customer Tables"), InstanceName("Customer Tables")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CustomerTablesRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Number"), NotNull]
        public Int32? Number
        {
            get { return Fields.Number[this]; }
            set { Fields.Number[this] = value; }
        }

        [DisplayName("Places"), NotNull]
        public Int32? Places
        {
            get { return Fields.Places[this]; }
            set { Fields.Places[this] = value; }
        }

        [DisplayName("Accessible"), NotNull]
        public Boolean? Accessible
        {
            get { return Fields.Accessible[this]; }
            set { Fields.Accessible[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerTablesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Number;
            public Int32Field Places;
            public BooleanField Accessible;
        }
    }
}
