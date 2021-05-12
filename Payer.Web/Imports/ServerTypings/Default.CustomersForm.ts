namespace Payer.Default {
    export interface CustomersForm {
        ClubMember: Serenity.StringEditor;
        PersonId: Serenity.IntegerEditor;
    }

    export class CustomersForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Customers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomersForm.init)  {
                CustomersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(CustomersForm, [
                    'ClubMember', w0,
                    'PersonId', w1
                ]);
            }
        }
    }
}

