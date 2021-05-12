namespace Payer.Default {
    export interface TransactionsForm {
        CustomerTableId: Serenity.IntegerEditor;
        NoOfCustomers: Serenity.IntegerEditor;
        QrCode: Serenity.StringEditor;
        DealNum: Serenity.StringEditor;
        WaiterId: Serenity.IntegerEditor;
        ItemId: Serenity.IntegerEditor;
        Created: Serenity.DateEditor;
        Closed: Serenity.DateEditor;
    }

    export class TransactionsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Transactions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransactionsForm.init)  {
                TransactionsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TransactionsForm, [
                    'CustomerTableId', w0,
                    'NoOfCustomers', w0,
                    'QrCode', w1,
                    'DealNum', w1,
                    'WaiterId', w0,
                    'ItemId', w0,
                    'Created', w2,
                    'Closed', w2
                ]);
            }
        }
    }
}

