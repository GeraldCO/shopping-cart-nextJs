import { Item } from "./items";
// export interface CartItem {
//     id : number;
//     name: string;
//     price: number;
//     quantity: number;
// }

export interface CartContextType{
    status: boolean
    items: Item[];
    addItem: (item: Item) => void;
    removeItem: (itemId: string) => void;
    showCart: (cartStatus: boolean) => void
}