import React, {useEffect, useState} from 'react'
import {Button, Container} from "react-bootstrap";
import {IconButton} from "@mui/material";
import {RiDeleteBin6Line as DeleteIcon} from "react-icons/ri";
import BasketStore from "../../states/BasketStore";
import BasketProduct from "./BasketProduct";

function BasketProducts(){
    const {total, calcTotal, inBasketList,initTotal} = BasketStore();
    useEffect(() => {
        initTotal();
    }, []);

return (
<>
       <Container>
           {inBasketList.map((product) =>(
               <BasketProduct product={product}/>
           ))}
       </Container>
    <Container className="baskets-calc-btns">

        <Button className="basket-sum-btn" variant="info" size="lg" disabled>
            {(total!==0)?`합계 : $ ${Math.floor(total*100)/100}`
            :`합계 : `}
        </Button>
        <Button className="basket-calc-btn" size="lg" variant="outline-warning"
                onClick={()=>{
                    calcTotal();}}>계산하기</Button>
    </Container>
</>

);
}
export default BasketProducts;