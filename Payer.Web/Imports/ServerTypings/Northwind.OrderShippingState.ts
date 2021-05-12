namespace Payer.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Payer.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

