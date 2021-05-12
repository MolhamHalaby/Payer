
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class TipsDialog extends Serenity.EntityDialog<TipsRow, any> {
        protected getFormKey() { return TipsForm.formKey; }
        protected getIdProperty() { return TipsRow.idProperty; }
        protected getLocalTextPrefix() { return TipsRow.localTextPrefix; }
        protected getService() { return TipsService.baseUrl; }
        protected getDeletePermission() { return TipsRow.deletePermission; }
        protected getInsertPermission() { return TipsRow.insertPermission; }
        protected getUpdatePermission() { return TipsRow.updatePermission; }

        protected form = new TipsForm(this.idPrefix);

    }
}