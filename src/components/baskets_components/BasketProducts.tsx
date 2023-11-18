import React, {useState} from 'react'
import {Button, Container} from "react-bootstrap";
import {IconButton} from "@mui/material";
import {RiDeleteBin6Line as DeleteIcon} from "react-icons/ri";
import BasketStore from "../../states/BasketStore";
import BasketProduct from "./BasketProduct";

function BasketProducts(){
    const {inBasketList} = BasketStore();

return (

       <Container>
           {inBasketList.map((product) =>(
               <BasketProduct product={product}/>
           ))}
       </Container>

);
}
export default BasketProducts;