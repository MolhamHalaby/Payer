namespace Payer.Default {
    export interface TransactionItemsRow {
        Id?: number;
        TransactionId?: number;
        ItemId?: number;
        CustomerId?: number;
        TotalPaid?: number;
        TransactionCustomerTableId?: number;
        TransactionNoOfCustomers?: number;
        TransactionQrCode?: string;
        TransactionDealNum?: string;
        TransactionWaiterId?: number;
        TransactionItemId?: number;
        TransactionCreated?: string;
        TransactionClosed?: string;
        ItemName?: string;
        ItemPrice?: number;
        CustomerClubMember?: string;
        CustomerPersonId?: number;
    }

    export namespace TransactionItemsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.TransactionItems';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            TransactionId = "TransactionId",
            ItemId = "ItemId",
            CustomerId = "CustomerId",
            TotalPaid = "TotalPaid",
            TransactionCustomerTableId = "TransactionCustomerTableId",
            TransactionNoOfCustomers = "TransactionNoOfCustomers",
            TransactionQrCode = "TransactionQrCode",
            TransactionDealNum = "TransactionDealNum",
            TransactionWaiterId = "TransactionWaiterId",
            TransactionItemId = "TransactionItemId",
            TransactionCreated = "TransactionCreated",
            TransactionClosed = "TransactionClosed",
            ItemName = "ItemName",
            ItemPrice = "ItemPrice",
            CustomerClubMember = "CustomerClubMember",
            CustomerPersonId = "CustomerPersonId"
        }
    }
}

