import {create} from 'zustand';
import axios from "axios";
export enum Category{
    ALL="",
    MENS="men's clothing",
    JEWElERY="jewelery",
    WOMENS="women's clothing",
    ELECTRONICS="electronics"
}
type Product={
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
}
type RootStore={
    productList: Product[];
    loading: boolean;
    hasErrors: boolean;
    setProductList:(category?: string) =>void;
}

const useProductStore = create<RootStore>((set)=>({
    productList: [],
    loading: false,
    hasErrors: false,
    setProductList: async(category?: string)=>{
        try {
            let url = "https://fakestoreapi.com/products";
            if (category) {
                url += `/category/${category}`;
            }
            const response = await axios.get(url);
            set((state) => ({
                loading: true,
                productList: [...response.data]
            }));
        }catch(error){
            set(()=>({hasErrors:true, loading:false}))
        }finally{
            set(()=>({loading:false}))
        }

    }
}));
export default useProductStore;