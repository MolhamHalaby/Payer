namespace Payer.Default {
    export interface TipsRow {
        Id?: number;
        Date?: string;
        WaiterId?: number;
        Value?: number;
        WaiterUserId?: number;
        WaiterPersonId?: number;
    }

    export namespace TipsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.Tips';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Date = "Date",
            WaiterId = "WaiterId",
            Value = "Value",
            WaiterUserId = "WaiterUserId",
            WaiterPersonId = "WaiterPersonId"
        }
    }
}

