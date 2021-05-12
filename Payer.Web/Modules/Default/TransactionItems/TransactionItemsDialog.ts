
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class TransactionItemsDialog extends Serenity.EntityDialog<TransactionItemsRow, any> {
        protected getFormKey() { return TransactionItemsForm.formKey; }
        protected getIdProperty() { return TransactionItemsRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionItemsRow.localTextPrefix; }
        protected getService() { return TransactionItemsService.baseUrl; }
        protected getDeletePermission() { return TransactionItemsRow.deletePermission; }
        protected getInsertPermission() { return TransactionItemsRow.insertPermission; }
        protected getUpdatePermission() { return TransactionItemsRow.updatePermission; }

        protected form = new TransactionItemsForm(this.idPrefix);

    }
}