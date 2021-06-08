
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class PersonsGrid extends Serenity.EntityGrid<PersonsRow, any> {
        protected getColumnsKey() { return 'Default.Persons'; }
        protected getDialogType() { return PersonsDialog; }
        protected getIdProperty() { return PersonsRow.idProperty; }
        protected getInsertPermission() { return PersonsRow.insertPermission; }
        protected getLocalTextPrefix() { return PersonsRow.localTextPrefix; }
        protected getService() { return PersonsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {


            var managerId = window.prompt("Please Enter Id", "ID:");
            
            if (managerId == "0526989970") {
                super.addButtonClick();
            }
            
            else if (managerId!=null) {
                alert("Identification number is incorrect!");
            }



        }
    }
}