import React, {useState} from 'react'
import {BasketProductType} from '../../states/DefinedType';
import {Button, Container} from "react-bootstrap";
import {IconButton} from "@mui/material";
import {RiDeleteBin6Line as DeleteIcon} from "react-icons/ri";
import BasketStore from "../../states/BasketStore";
type OwnProps = {
    product: BasketProductType;
}
function BasketProduct({product}:OwnProps){
    const {removeProductBasket, addProductCount,  minusProductCount}=BasketStore();

    return (
    <>
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
                <div style={{marginTop: "9px"}}>{`${product.price} X ${product.count} = $ `}{
                    (Math.floor(product.price*product.count*100)/100)
                }</div>
            </div>
        </div>
        <div className="baskets-center">
            <Button variant="outline-dark" style={{marginRight: "10px"}}
                    onClick={()=>minusProductCount(product.id)}
            >-</Button>
            <Button variant="outline-dark" disabled={true}>{product.count}</Button>
            <Button variant="outline-dark" style={{marginLeft: "10px"}}
                    onClick={()=>addProductCount(product.id)}>+</Button>

        </div>
        <IconButton onClick={()=>removeProductBasket(product.id)}
            style={{fontSize: "20px", marginBottom: "30px"}}>
            <DeleteIcon />
        </IconButton>
    </Container>
    </>

);
}
export default BasketProduct;