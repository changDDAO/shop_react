import {create} from 'zustand';
import {BasketProductType, Product} from "./DefinedType";
import useProductStore from "./ProductStore";
import ProductStore from "./ProductStore";

type BasketStore = {
    inBasketList: BasketProductType[];
    addProductBasket: (product: Product) => void;
    addProductCount: (productId: number) => void;
    minusProductCount: (productId: number) => void;
    removeProductBasket: (productId: number) => void;
    total: number;
    calcTotal: () =>void;
    initTotal: () =>void;
    basketCount: number;
}
const BasketStore = create<BasketStore>((set) => ({
    inBasketList: [],
    basketCount: 0,
    total: 0,

    addProductBasket: (newProduct) => {
        set((state) => {
            const duplicateProduct = state.inBasketList.find(
                (product) => product.id === newProduct.id
            )
            if (duplicateProduct) {
                return {
                    inBasketList: state.inBasketList.map(
                        (p) => p.id === newProduct.id
                            ? {...p, count: p.count + 1}
                            : p)
                }
            } else {
                return {
                    inBasketList: [...state.inBasketList,
                        {...newProduct, count: 1}],
                }
            }
        })

    },
    removeProductBasket: (productId: number) => {
        set((state) => ({
            inBasketList: [...state.inBasketList.filter(p => p.id !== productId)],
            basketCount: state.basketCount - 1,
        }));
    },
    addProductCount: (productId: number) => {
        set((state) => ({
            inBasketList: state.inBasketList.map((p) =>
                (p.id === productId)
                    ? {...p, count: p.count + 1}
                    : p)
        }))
    },
    minusProductCount: (productId: number) => {
        set((state) => ({
            inBasketList: state.inBasketList.map((p) =>
                (p.id === productId)
                    ? {
                        ...p, count: (p.count > 1)
                            ? p.count - 1
                            : 1
                    }
                    : p)
        }))
    },
    calcTotal:() =>{
        set((state) => {
          const total = state.inBasketList.reduce(
              (sum, product)=>sum+(product.price*product.count), 0)
          return {
              total: total,
          }
        })
    },
    initTotal: () =>{
        set((state)=>({
            total: 0,
        }))
    },

}));

export default BasketStore;


