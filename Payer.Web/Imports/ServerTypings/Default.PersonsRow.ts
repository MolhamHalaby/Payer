namespace Payer.Default {
    export interface PersonsRow {
        Name?: string;
        Birthday?: string;
        Phone?: string;
        Address?: string;
        Email?: string;
        Id?: number;
    }

    export namespace PersonsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Persons';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Name = "Name",
            Birthday = "Birthday",
            Phone = "Phone",
            Address = "Address",
            Email = "Email",
            Id = "Id"
        }
    }
}

