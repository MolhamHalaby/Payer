namespace Payer.Default {
    export interface CustomersRow {
        ClubMember?: string;
        Id?: number;
        PersonId?: number;
        PersonName?: string;
        PersonBirthday?: string;
        PersonPhone?: string;
        PersonAddress?: string;
        PersonEmail?: string;
    }

    export namespace CustomersRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ClubMember';
        export const localTextPrefix = 'Default.Customers';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ClubMember = "ClubMember",
            Id = "Id",
            PersonId = "PersonId",
            PersonName = "PersonName",
            PersonBirthday = "PersonBirthday",
            PersonPhone = "PersonPhone",
            PersonAddress = "PersonAddress",
            PersonEmail = "PersonEmail"
        }
    }
}

