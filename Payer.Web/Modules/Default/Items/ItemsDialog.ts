
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class ItemsDialog extends Serenity.EntityDialog<ItemsRow, any> {
        protected getFormKey() { return ItemsForm.formKey; }
        protected getIdProperty() { return ItemsRow.idProperty; }
        protected getLocalTextPrefix() { return ItemsRow.localTextPrefix; }
        protected getNameProperty() { return ItemsRow.nameProperty; }
        protected getService() { return ItemsService.baseUrl; }
        protected getDeletePermission() { return ItemsRow.deletePermission; }
        protected getInsertPermission() { return ItemsRow.insertPermission; }
        protected getUpdatePermission() { return ItemsRow.updatePermission; }

        protected form = new ItemsForm(this.idPrefix);

    }
}