
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class MailsMessagesDialog extends Serenity.EntityDialog<MailsMessagesRow, any> {
        protected getFormKey() { return MailsMessagesForm.formKey; }
        protected getIdProperty() { return MailsMessagesRow.idProperty; }
        protected getLocalTextPrefix() { return MailsMessagesRow.localTextPrefix; }
        protected getNameProperty() { return MailsMessagesRow.nameProperty; }
        protected getService() { return MailsMessagesService.baseUrl; }
        protected getDeletePermission() { return MailsMessagesRow.deletePermission; }
        protected getInsertPermission() { return MailsMessagesRow.insertPermission; }
        protected getUpdatePermission() { return MailsMessagesRow.updatePermission; }

        protected form = new MailsMessagesForm(this.idPrefix);

    }
}