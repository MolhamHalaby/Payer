
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class WaitersGrid extends Serenity.EntityGrid<WaitersRow, any> {
        protected getColumnsKey() { return 'Default.Waiters'; }
        protected getDialogType() { return WaitersDialog; }
        protected getIdProperty() { return WaitersRow.idProperty; }
        protected getInsertPermission() { return WaitersRow.insertPermission; }
        protected getLocalTextPrefix() { return WaitersRow.localTextPrefix; }
        protected getService() { return WaitersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}