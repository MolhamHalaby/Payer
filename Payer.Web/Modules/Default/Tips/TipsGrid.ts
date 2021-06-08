
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class TipsGrid extends Serenity.EntityGrid<TipsRow, any> {
        protected getColumnsKey() { return 'Default.Tips'; }
        protected getDialogType() { return TipsDialog; }
        protected getIdProperty() { return TipsRow.idProperty; }
        protected getInsertPermission() { return TipsRow.insertPermission; }
        protected getLocalTextPrefix() { return TipsRow.localTextPrefix; }
        protected getService() { return TipsService.baseUrl; }


        private rowSelection: Serenity.GridRowSelectionMixin;
        constructor(container: JQuery) {
            super(container);
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }


        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
          //  columns.unshift(Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            Q.first(columns, x => x.field == TipsRow.Fields.PullTip).format =
                ctx => `<a href="javascript:;" class="inline-action pull-tip"><i class="btn btn-primary btn-sm" style="line-height: 3px">PULL</i></a>`;
            return columns;
        }
        private PullTip(id) {
            
           
            id = window.prompt("Please Enter Id", "ID:");
            if(id!=null)
                window.location.href = Q.resolveUrl('~/Default/Tips/Pull?id=' + id);
            
                

        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();
                if (target.hasClass('pull-tip')) {
                    this.PullTip(item.WaiterId);
                }
            }
        }


    }
}