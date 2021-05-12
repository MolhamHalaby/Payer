
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class TipsGrid extends Serenity.EntityGrid<TipsRow, any> {
        protected getColumnsKey() { return 'Default.Tips'; }
        protected getDialogType() { return TipsDialog; }
        protected getIdProperty() { return TipsRow.idProperty; }
        protected getInsertPermission() { return TipsRow.insertPermission; }
        protected getLocalTextPrefix() { return TipsRow.localTextPrefix; }
        protected getService() { return TipsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}