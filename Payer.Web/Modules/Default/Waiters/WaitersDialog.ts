
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class WaitersDialog extends Serenity.EntityDialog<WaitersRow, any> {
        protected getFormKey() { return WaitersForm.formKey; }
        protected getIdProperty() { return WaitersRow.idProperty; }
        protected getLocalTextPrefix() { return WaitersRow.localTextPrefix; }
        protected getService() { return WaitersService.baseUrl; }
        protected getDeletePermission() { return WaitersRow.deletePermission; }
        protected getInsertPermission() { return WaitersRow.insertPermission; }
        protected getUpdatePermission() { return WaitersRow.updatePermission; }

        protected form = new WaitersForm(this.idPrefix);

    }
}