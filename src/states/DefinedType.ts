export enum Category{
    ALL="",
    MENS="men's clothing",
    JEWElERY="jewelery",
    WOMENS="women's clothing",
    ELECTRONICS="electronics"
}
export type Product={
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
}

export type BasketProduct= Product & {
    count: number;
}