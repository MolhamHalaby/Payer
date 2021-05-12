
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class TransactionItemsGrid extends Serenity.EntityGrid<TransactionItemsRow, any> {
        protected getColumnsKey() { return 'Default.TransactionItems'; }
        protected getDialogType() { return TransactionItemsDialog; }
        protected getIdProperty() { return TransactionItemsRow.idProperty; }
        protected getInsertPermission() { return TransactionItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return TransactionItemsRow.localTextPrefix; }
        protected getService() { return TransactionItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}