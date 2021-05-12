
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class ItemsGrid extends Serenity.EntityGrid<ItemsRow, any> {
        protected getColumnsKey() { return 'Default.Items'; }
        protected getDialogType() { return ItemsDialog; }
        protected getIdProperty() { return ItemsRow.idProperty; }
        protected getInsertPermission() { return ItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return ItemsRow.localTextPrefix; }
        protected getService() { return ItemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}