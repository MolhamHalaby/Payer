
namespace Payer.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Transactions]")]
    [DisplayName("Transactions"), InstanceName("Transactions")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TransactionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Customer Table"), NotNull, ForeignKey("[dbo].[CustomerTables]", "Id"), LeftJoin("jCustomerTable")]
        public Int32? CustomerTableId
        {
            get { return Fields.CustomerTableId[this]; }
            set { Fields.CustomerTableId[this] = value; }
        }

        [DisplayName("No Of Customers")]
        public Int32? NoOfCustomers
        {
            get { return Fields.NoOfCustomers[this]; }
            set { Fields.NoOfCustomers[this] = value; }
        }

        [DisplayName("Qr Code"), QuickSearch]
        public String QrCode
        {
            get { return Fields.QrCode[this]; }
            set { Fields.QrCode[this] = value; }
        }

        [DisplayName("Deal Num")]
        public String DealNum
        {
            get { return Fields.DealNum[this]; }
            set { Fields.DealNum[this] = value; }
        }

        [DisplayName("Waiter"), NotNull, ForeignKey("[dbo].[Waiters]", "Id"), LeftJoin("jWaiter")]
        public Int32? WaiterId
        {
            get { return Fields.WaiterId[this]; }
            set { Fields.WaiterId[this] = value; }
        }
/*
        [DisplayName("Item"), NotNull, ForeignKey("[dbo].[Items]", "Id"), LeftJoin("jItem"), TextualField("ItemName")]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }
*/
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Created"), NotNull]
        public DateTime? Created
        {
            get { return Fields.Created[this]; }
            set { Fields.Created[this] = value; }
        }

        [DisplayName("Closed")]
        public DateTime? Closed
        {
            get { return Fields.Closed[this]; }
            set { Fields.Closed[this] = value; }
        }

        [DisplayName("Customer Table Number"), Expression("jCustomerTable.[Number]")]
        public Int32? CustomerTableNumber
        {
            get { return Fields.CustomerTableNumber[this]; }
            set { Fields.CustomerTableNumber[this] = value; }
        }

        [DisplayName("Customer Table Places"), Expression("jCustomerTable.[Places]")]
        public Int32? CustomerTablePlaces
        {
            get { return Fields.CustomerTablePlaces[this]; }
            set { Fields.CustomerTablePlaces[this] = value; }
        }

        [DisplayName("Customer Table Accessible"), Expression("jCustomerTable.[Accessible]")]
        public Boolean? CustomerTableAccessible
        {
            get { return Fields.CustomerTableAccessible[this]; }
            set { Fields.CustomerTableAccessible[this] = value; }
        }

        [DisplayName("Waiter User Id"), Expression("jWaiter.[UserId]")]
        public Int32? WaiterUserId
        {
            get { return Fields.WaiterUserId[this]; }
            set { Fields.WaiterUserId[this] = value; }
        }

        [DisplayName("Waiter Person Id"), Expression("jWaiter.[PersonId]")]
        public Int32? WaiterPersonId
        {
            get { return Fields.WaiterPersonId[this]; }
            set { Fields.WaiterPersonId[this] = value; }
        }
/*
        [DisplayName("Item Name"), Expression("jItem.[Name]")]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Item Price"), Expression("jItem.[Price]")]
        public Double? ItemPrice
        {
            get { return Fields.ItemPrice[this]; }
            set { Fields.ItemPrice[this] = value; }
        }
*/
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.QrCode; }
        }

        [NotMapped]
        public String GenerateQrCode
        {
            get { return Fields.GenerateQrCode[this]; }
            set { Fields.GenerateQrCode[this] = value; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public TransactionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerTableId;
            public Int32Field NoOfCustomers;
            public StringField QrCode;
            public StringField DealNum;
            public Int32Field WaiterId;
           // public Int32Field ItemId;
            public Int32Field Id;
            public DateTimeField Created;
            public DateTimeField Closed;

            public Int32Field CustomerTableNumber;
            public Int32Field CustomerTablePlaces;
            public BooleanField CustomerTableAccessible;

            public Int32Field WaiterUserId;
            public Int32Field WaiterPersonId;

            //public StringField ItemName;
           // public DoubleField ItemPrice;

            public StringField GenerateQrCode;

        }
    }
}
