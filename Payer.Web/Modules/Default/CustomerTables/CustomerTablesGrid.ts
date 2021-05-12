
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class CustomerTablesGrid extends Serenity.EntityGrid<CustomerTablesRow, any> {
        protected getColumnsKey() { return 'Default.CustomerTables'; }
        protected getDialogType() { return CustomerTablesDialog; }
        protected getIdProperty() { return CustomerTablesRow.idProperty; }
        protected getInsertPermission() { return CustomerTablesRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomerTablesRow.localTextPrefix; }
        protected getService() { return CustomerTablesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}