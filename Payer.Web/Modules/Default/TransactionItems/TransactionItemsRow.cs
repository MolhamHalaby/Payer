﻿
namespace Payer.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[TransactionItems]")]
    [DisplayName("Transaction Items"), InstanceName("Transaction Items")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TransactionItemsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Transaction"), NotNull, ForeignKey("[dbo].[Transactions]", "Id"), LeftJoin("jTransaction"), TextualField("TransactionQrCode")]
        public Int32? TransactionId
        {
            get { return Fields.TransactionId[this]; }
            set { Fields.TransactionId[this] = value; }
        }

        [DisplayName("Item"), NotNull, ForeignKey("[dbo].[Items]", "Id"), LeftJoin("jItem"), TextualField("ItemName")]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Customer")]//, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerClubMember")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Total Paid")]
        public Double? TotalPaid
        {
            get { return Fields.TotalPaid[this]; }
            set { Fields.TotalPaid[this] = value; }
        }

        [DisplayName("Transaction Customer Table Id"), Expression("jTransaction.[CustomerTableId]")]
        public Int32? TransactionCustomerTableId
        {
            get { return Fields.TransactionCustomerTableId[this]; }
            set { Fields.TransactionCustomerTableId[this] = value; }
        }

        [DisplayName("Transaction No Of Customers"), Expression("jTransaction.[NoOfCustomers]")]
        public Int32? TransactionNoOfCustomers
        {
            get { return Fields.TransactionNoOfCustomers[this]; }
            set { Fields.TransactionNoOfCustomers[this] = value; }
        }

        [DisplayName("Transaction Qr Code"), Expression("jTransaction.[QrCode]")]
        public String TransactionQrCode
        {
            get { return Fields.TransactionQrCode[this]; }
            set { Fields.TransactionQrCode[this] = value; }
        }

        [DisplayName("Transaction Deal Num"), Expression("jTransaction.[DealNum]")]
        public String TransactionDealNum
        {
            get { return Fields.TransactionDealNum[this]; }
            set { Fields.TransactionDealNum[this] = value; }
        }

        [DisplayName("Transaction Waiter Id"), Expression("jTransaction.[WaiterId]")]
        public Int32? TransactionWaiterId
        {
            get { return Fields.TransactionWaiterId[this]; }
            set { Fields.TransactionWaiterId[this] = value; }
        }

        [DisplayName("Transaction Item Id"), Expression("jTransaction.[ItemId]")]
        public Int32? TransactionItemId
        {
            get { return Fields.TransactionItemId[this]; }
            set { Fields.TransactionItemId[this] = value; }
        }

        [DisplayName("Transaction Created"), Expression("jTransaction.[Created]")]
        public DateTime? TransactionCreated
        {
            get { return Fields.TransactionCreated[this]; }
            set { Fields.TransactionCreated[this] = value; }
        }

        [DisplayName("Transaction Closed"), Expression("jTransaction.[Closed]")]
        public DateTime? TransactionClosed
        {
            get { return Fields.TransactionClosed[this]; }
            set { Fields.TransactionClosed[this] = value; }
        }

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
/*
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
*/
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TransactionItemsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field TransactionId;
            public Int32Field ItemId;
            public Int32Field CustomerId;
            public DoubleField TotalPaid;

            public Int32Field TransactionCustomerTableId;
            public Int32Field TransactionNoOfCustomers;
            public StringField TransactionQrCode;
            public StringField TransactionDealNum;
            public Int32Field TransactionWaiterId;
            public Int32Field TransactionItemId;
            public DateTimeField TransactionCreated;
            public DateTimeField TransactionClosed;

            public StringField ItemName;
            public DoubleField ItemPrice;

         /*   public StringField CustomerClubMember;
            public Int32Field CustomerPersonId;*/
        }
    }
}
