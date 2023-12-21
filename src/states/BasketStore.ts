import {create} from 'zustand';
import {BasketProductType, Product} from "./DefinedType";


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
    inBasketList: [], //현재 장바구니의 상태를 담을 리스트
    basketCount: 0, //현재 장바구니에 담긴 상품의 갯수의 상태를 지닌다.
    total: 0, //장바구니에 담긴 상품들의 가격을 합산한 값의 상태를 지닌다.
    //사용자가 '장바구니 담기' 버튼을 클릭했을 때, 시행될 함수이다.
    addProductBasket: (newProduct) => {
        set((state) => {
            /*장바구니에 중복된 상품을 담지 못하도록 처리한다.
            이미 장바구니에 담겨 있는 상품의 '장바구니 담기'버튼을 클릭했을 때, 그 상품의 count 갯수만 늘려준다.*/
            const duplicateProduct = state.inBasketList.find(
                product => product.id === newProduct.id
            )
            //장바구니에 이미 담겨있는 상품의 장바구니담기 버튼을 클릭했을 때,
            if (duplicateProduct) {
                return {
                    inBasketList: state.inBasketList.map(
                        p => p.id === newProduct.id
                            ? {...p, count: p.count + 1}
                            : p)
                }
                //장바구니에 없는 새로운 상품의 장바구니 담기 버튼을 클릭했을 때,
            } else {
                return {
                    inBasketList: [...state.inBasketList,
                        {...newProduct, count: 1}],
                }
            }
        })

    },
    //장바구니 페이지에서 장바구니에 담긴 상품의 오른쪽 휴지통버튼을 클릭했을 때 상태변화를 시켜줄 함수이다.
    removeProductBasket: (productId: number) => {
        set((state) => ({
            inBasketList: [...state.inBasketList.filter(p => p.id !== productId)],
            basketCount: state.basketCount - 1,
        }));
    },
    //장바구니 페이지에서 담긴 상품의 수량을 증가시키는 +버튼을 클릭했을 때, 시행될 함수이다.
    addProductCount: (productId: number) => {
        set((state) => ({
            inBasketList: state.inBasketList.map((p) =>
                (p.id === productId)
                    ? {...p, count: p.count + 1}
                    : p)
        }))
    },
    //장바구니 페이지에서 담긴 상품의 수량을 감소시키는 -버튼을 클릭했을 때, 시행될 함수이다.
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
    //현재 inBasketList에 담겨있는 전체상품의 가격들을 합산하여 total의 상태를 변화시켜줄 함수이다.
    calcTotal:() =>{
        set(state => {
          const total = state.inBasketList.reduce(
              (sum, product)=>sum+(product.price*product.count), 0);
          return {
              total: total,
          }
        })
    },
    //장바구니 page에 Re rendering 될 때마다, 시행될 함수이다. total의 상태를 0으로 초기화 해준다.
    initTotal: () =>{
        set((state)=>({
            total: 0,
        }))
    },

}));

export default BasketStore;


