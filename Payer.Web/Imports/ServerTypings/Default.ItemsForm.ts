namespace Payer.Default {
    export interface ItemsForm {
        Name: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
    }

    export class ItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Items';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ItemsForm.init)  {
                ItemsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ItemsForm, [
                    'Name', w0,
                    'Price', w1
                ]);
            }
        }
    }
}

