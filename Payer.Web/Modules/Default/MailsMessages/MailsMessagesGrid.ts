
namespace Payer.Default {

    @Serenity.Decorators.registerClass()
    export class MailsMessagesGrid extends Serenity.EntityGrid<MailsMessagesRow, any> {
        protected getColumnsKey() { return 'Default.MailsMessages'; }
        protected getDialogType() { return MailsMessagesDialog; }
        protected getIdProperty() { return MailsMessagesRow.idProperty; }
        protected getInsertPermission() { return MailsMessagesRow.insertPermission; }
        protected getLocalTextPrefix() { return MailsMessagesRow.localTextPrefix; }
        protected getService() { return MailsMessagesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}