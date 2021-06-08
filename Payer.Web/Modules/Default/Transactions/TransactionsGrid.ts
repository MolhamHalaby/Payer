
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class TransactionsGrid extends Serenity.EntityGrid<TransactionsRow, any> {
        protected getColumnsKey() { return 'Default.Transactions'; }
        protected getDialogType() { return TransactionsDialog; }
        protected getIdProperty() { return TransactionsRow.idProperty; }
        protected getInsertPermission() { return TransactionsRow.insertPermission; }
        protected getLocalTextPrefix() { return TransactionsRow.localTextPrefix; }
        protected getService() { return TransactionsService.baseUrl; }

        //private rowSelection: Serenity.GridRowSelectionMixin;
        constructor(container: JQuery) {
            super(container);
            //this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
           // columns.unshift(Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            Q.first(columns, x => x.field == TransactionsRow.Fields.GenerateQrCode).format =
                ctx => `<a href="javascript:;" class="inline-action generate-qr-code"><i class="fa fa-qrcode"></i></a>`;
            return columns;
        }
        private generateQrCode(id) {
            window.location.href = Q.resolveUrl('~/Default/Transactions/DisplayQrCode?id=' + id);

            //later, try to put this href in a new tab and not the current window
        }


        

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();
                if (target.hasClass('generate-qr-code')) {
                    this.generateQrCode(item.Id);
                }
            }
        }

    }
}