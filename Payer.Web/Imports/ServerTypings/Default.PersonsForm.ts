namespace Payer.Default {
    export interface PersonsForm {
        Name: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }

    export class PersonsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Persons';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PersonsForm.init)  {
                PersonsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(PersonsForm, [
                    'Name', w0,
                    'Birthday', w1,
                    'Phone', w0,
                    'Address', w0,
                    'Email', w0
                ]);
            }
        }
    }
}

