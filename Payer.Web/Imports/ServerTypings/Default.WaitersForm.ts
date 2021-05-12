namespace Payer.Default {
    export interface WaitersForm {
        UserId: Serenity.IntegerEditor;
        PersonId: Serenity.IntegerEditor;
    }

    export class WaitersForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Waiters';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WaitersForm.init)  {
                WaitersForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(WaitersForm, [
                    'UserId', w0,
                    'PersonId', w0
                ]);
            }
        }
    }
}

