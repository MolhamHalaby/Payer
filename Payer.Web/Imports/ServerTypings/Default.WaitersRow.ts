namespace Payer.Default {
    export interface WaitersRow {
        UserId?: number;
        Id?: number;
        PersonId?: number;
        PersonName?: string;
        PersonBirthday?: string;
        PersonPhone?: string;
        PersonAddress?: string;
        PersonEmail?: string;
    }

    export namespace WaitersRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.Waiters';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            UserId = "UserId",
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

