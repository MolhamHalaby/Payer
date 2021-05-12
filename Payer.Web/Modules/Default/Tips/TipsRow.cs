
namespace Payer.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Tips]")]
    [DisplayName("Tips"), InstanceName("Tips")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TipsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Waiter"), NotNull, ForeignKey("[dbo].[Waiters]", "Id"), LeftJoin("jWaiter")]
        public Int32? WaiterId
        {
            get { return Fields.WaiterId[this]; }
            set { Fields.WaiterId[this] = value; }
        }

        [DisplayName("Value"), NotNull]
        public Double? Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TipsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField Date;
            public Int32Field WaiterId;
            public DoubleField Value;

            public Int32Field WaiterUserId;
            public Int32Field WaiterPersonId;
        }
    }
}
