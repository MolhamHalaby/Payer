
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

        protected addButtonClick() {
            

            var managerId = window.prompt("Please Enter Id", "ID:");
            if (managerId == "0526989970") {
                super.addButtonClick();
            }
            else if (managerId != null) {
                alert("Identification number is incorrect!");
            }


        }
      

        
    }
}