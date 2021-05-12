namespace Payer.Default {
    export interface CustomerTablesForm {
        Number: Serenity.IntegerEditor;
        Places: Serenity.IntegerEditor;
        Accessible: Serenity.BooleanEditor;
    }

    export class CustomerTablesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CustomerTables';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerTablesForm.init)  {
                CustomerTablesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(CustomerTablesForm, [
                    'Number', w0,
                    'Places', w0,
                    'Accessible', w1
                ]);
            }
        }
    }
}

