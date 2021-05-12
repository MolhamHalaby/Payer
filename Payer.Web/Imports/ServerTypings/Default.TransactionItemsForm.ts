namespace Payer.Default {
    export interface TransactionItemsForm {
        TransactionId: Serenity.IntegerEditor;
        ItemId: Serenity.IntegerEditor;
        CustomerId: Serenity.IntegerEditor;
        TotalPaid: Serenity.DecimalEditor;
    }

    export class TransactionItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TransactionItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransactionItemsForm.init)  {
                TransactionItemsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(TransactionItemsForm, [
                    'TransactionId', w0,
                    'ItemId', w0,
                    'CustomerId', w0,
                    'TotalPaid', w1
                ]);
            }
        }
    }
}

