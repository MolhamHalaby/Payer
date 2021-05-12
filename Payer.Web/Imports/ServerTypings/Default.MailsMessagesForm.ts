namespace Payer.Default {
    export interface MailsMessagesForm {
        Body: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
    }

    export class MailsMessagesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.MailsMessages';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MailsMessagesForm.init)  {
                MailsMessagesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(MailsMessagesForm, [
                    'Body', w0,
                    'Subject', w0,
                    'CustomerId', w1
                ]);
            }
        }
    }
}

