namespace Payer.Default {
    export interface CustomerTablesRow {
        Id?: number;
        Number?: number;
        Places?: number;
        Accessible?: boolean;
    }

    export namespace CustomerTablesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.CustomerTables';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Places = "Places",
            Accessible = "Accessible"
        }
    }
}

