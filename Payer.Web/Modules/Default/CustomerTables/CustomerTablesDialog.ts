
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class CustomerTablesDialog extends Serenity.EntityDialog<CustomerTablesRow, any> {
        protected getFormKey() { return CustomerTablesForm.formKey; }
        protected getIdProperty() { return CustomerTablesRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerTablesRow.localTextPrefix; }
        protected getService() { return CustomerTablesService.baseUrl; }
        protected getDeletePermission() { return CustomerTablesRow.deletePermission; }
        protected getInsertPermission() { return CustomerTablesRow.insertPermission; }
        protected getUpdatePermission() { return CustomerTablesRow.updatePermission; }

        protected form = new CustomerTablesForm(this.idPrefix);

    }
}