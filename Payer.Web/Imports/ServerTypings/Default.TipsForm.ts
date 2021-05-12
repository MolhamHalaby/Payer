namespace Payer.Default {
    export interface TipsForm {
        Date: Serenity.DateEditor;
        WaiterId: Serenity.IntegerEditor;
        Value: Serenity.DecimalEditor;
    }

    export class TipsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Tips';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TipsForm.init)  {
                TipsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(TipsForm, [
                    'Date', w0,
                    'WaiterId', w1,
                    'Value', w2
                ]);
            }
        }
    }
}

