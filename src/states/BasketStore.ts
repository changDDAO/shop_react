import {create} from 'zustand';
import {Product} from "./DefinedType";
import useProductStore from "./ProductStore";

type BasketStore = {
    inBasketList: Product[];
    addProductBasket: (productId: number) => void
    removeProductBasket: (productId: number) => void
    basketCount: number

}
const useBasketStore = create<BasketStore>((set)=>({
    inBasketList: [] as Product[],
    basketCount:0,
    addProductBasket: (productId: number) => {
      const {productList} = useProductStore();
      const matchProduct = productList.filter(p => p.id === productId);
      set((state)=>({
          inBasketList: [...state.inBasketList, matchProduct[0]],
          basketCount: state.basketCount+1,
      }));
    },
    removeProductBasket: (productId: number) => {
        set((state)=>({
            inBasketList: [...state.inBasketList.filter(p => p.id !== productId)],
            basketCount: state.basketCount-1,
        }));
    }
}));

export default useBasketStore;


