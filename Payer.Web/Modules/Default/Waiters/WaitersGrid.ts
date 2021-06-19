
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

        //Disabling the limit access by entering the below password that used by the manager.
        protected addButtonClick() {


            var managerId = window.prompt("Please Enter Id", "ID:");
            if (managerId == "0526989970") {
                super.addButtonClick();
            }
            else if (managerId != null){
                alert("Identification number is incorrect!");
            }


        }
    }
}