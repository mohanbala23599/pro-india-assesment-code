export interface ProductListModel {
    productId: string;
    productName: string;
    availableQuantity: number;
}

export interface OrderProductModel {
    orderId: string,
    customerId: string,
    productId: string,
    quantity: number,
    title : string
}

export interface AddProductModel {
    productName : string,
    availableQuantity : number
}