import {create} from 'zustand';
import {Product} from "./DefinedType";
import useProductStore from "./ProductStore";
import ProductStore from "./ProductStore";

type BasketStore = {
    inBasketList: Product[];
    addProductBasket: (product: Product) => void;
    removeProductBasket: (productId: number) => void;
    basketCount: number;
}
const BasketStore = create<BasketStore>((set) => ({
    inBasketList: [] as Product[],
    basketCount: 0,
    addProductBasket: (product) => {

        set((state) => ({
            inBasketList: [...state.inBasketList,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    image: product.image,
                }],
            basketCount: state.basketCount + 1,
        }));
    },
    removeProductBasket: (productId: number) => {
        set((state) => ({
            inBasketList: [...state.inBasketList.filter(p => p.id !== productId)],
            basketCount: state.basketCount - 1,
        }));
    }
}));

export default BasketStore;


