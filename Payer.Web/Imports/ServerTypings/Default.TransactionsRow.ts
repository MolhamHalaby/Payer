namespace Payer.Default {
    export interface TransactionsRow {
        CustomerTableId?: number;
        NoOfCustomers?: number;
        QrCode?: string;
        DealNum?: string;
        WaiterId?: number;
        ItemId?: number;
        Id?: number;
        Created?: string;
        Closed?: string;
        CustomerTableNumber?: number;
        CustomerTablePlaces?: number;
        CustomerTableAccessible?: boolean;
        WaiterUserId?: number;
        WaiterPersonId?: number;
        ItemName?: string;
        ItemPrice?: number;
        GenerateQrCode?: string;
    }

    export namespace TransactionsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'QrCode';
        export const localTextPrefix = 'Default.Transactions';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CustomerTableId = "CustomerTableId",
            NoOfCustomers = "NoOfCustomers",
            QrCode = "QrCode",
            DealNum = "DealNum",
            WaiterId = "WaiterId",
            ItemId = "ItemId",
            Id = "Id",
            Created = "Created",
            Closed = "Closed",
            CustomerTableNumber = "CustomerTableNumber",
            CustomerTablePlaces = "CustomerTablePlaces",
            CustomerTableAccessible = "CustomerTableAccessible",
            WaiterUserId = "WaiterUserId",
            WaiterPersonId = "WaiterPersonId",
            ItemName = "ItemName",
            ItemPrice = "ItemPrice",
            GenerateQrCode = "GenerateQrCode"
        }
    }
}

