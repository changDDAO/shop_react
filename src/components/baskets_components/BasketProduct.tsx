import React, {useState} from 'react'
import { Product } from '../../states/DefinedType';
import {Button, Container} from "react-bootstrap";
import {IconButton} from "@mui/material";
import {RiDeleteBin6Line as DeleteIcon} from "react-icons/ri";
import BasketStore from "../../states/BasketStore";
type OwnProps = {
    product: Product;
}
function BasketProduct({product}:OwnProps){
    const {removeProductBasket}=BasketStore();
    const [productCount, setProductCount] = useState<number>(1);
    function plusCount(){
        setProductCount((prev)=>prev+1);
    }
    function minusCount(){
        if (productCount > 1) {
            setProductCount((prev)=>prev-1);
        }
    }
return (
    <Container className="basket-product-container" key={product.id}>
        <div className="baskets-left-section">
            <div className="baskets-left-img">
                <img alt="상품이미지" height="100%" width="100%" src={product.image}/>
            </div>
            <div className="left-description">
                <div style={{fontSize: "14px", color: "grey", fontWeight: "bold"}}>
                    {product.category}</div>
                <div style={{marginTop: "5px", fontWeight: 'bold',width:"300px"}}>
                    {product.title}</div>
                <div style={{marginTop: "9px"}}>{`${product.price} X ${productCount} = $ `}{
                    (Math.floor(product.price*productCount*100)/100)
                }</div>
            </div>
        </div>
        <div className="baskets-center">
            <Button variant="outline-dark" style={{marginRight: "10px"}} onClick={minusCount}>-</Button>
            <Button variant="outline-dark" disabled={true}>{productCount}</Button>
            <Button variant="outline-dark" style={{marginLeft: "10px"}} onClick={plusCount}>+</Button>

        </div>
        <IconButton style={{fontSize: "20px", marginBottom: "30px"}}>
            <DeleteIcon onClick={()=>removeProductBasket(product.id)}/>
        </IconButton>
    </Container>

);
}
export default BasketProduct;