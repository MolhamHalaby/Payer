namespace Payer.Default {
    export interface ItemsRow {
        Name?: string;
        Price?: number;
        Id?: number;
    }

    export namespace ItemsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Items';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Name = "Name",
            Price = "Price",
            Id = "Id"
        }
    }
}

