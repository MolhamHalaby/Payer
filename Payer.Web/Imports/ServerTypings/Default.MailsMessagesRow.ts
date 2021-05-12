namespace Payer.Default {
    export interface MailsMessagesRow {
        Body?: string;
        Subject?: string;
        Id?: number;
        CustomerId?: number;
        CustomerClubMember?: string;
        CustomerPersonId?: number;
    }

    export namespace MailsMessagesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Body';
        export const localTextPrefix = 'Default.MailsMessages';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Body = "Body",
            Subject = "Subject",
            Id = "Id",
            CustomerId = "CustomerId",
            CustomerClubMember = "CustomerClubMember",
            CustomerPersonId = "CustomerPersonId"
        }
    }
}

