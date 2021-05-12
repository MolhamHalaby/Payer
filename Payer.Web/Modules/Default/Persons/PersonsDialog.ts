
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class PersonsDialog extends Serenity.EntityDialog<PersonsRow, any> {
        protected getFormKey() { return PersonsForm.formKey; }
        protected getIdProperty() { return PersonsRow.idProperty; }
        protected getLocalTextPrefix() { return PersonsRow.localTextPrefix; }
        protected getNameProperty() { return PersonsRow.nameProperty; }
        protected getService() { return PersonsService.baseUrl; }
        protected getDeletePermission() { return PersonsRow.deletePermission; }
        protected getInsertPermission() { return PersonsRow.insertPermission; }
        protected getUpdatePermission() { return PersonsRow.updatePermission; }

        protected form = new PersonsForm(this.idPrefix);

    }
}