import React from 'react'
import {Image, Button, Card, Container, Spinner} from "react-bootstrap";
import {RiDeleteBin6Line as DeleteIcon} from "react-icons/ri";
import {IconButton} from "@mui/material";
import BasketsEmpty from "../components/baskets_components/BasketsEmpty";
import BasketProducts from "../components/baskets_components/BasketProducts";
import BasketStore from "../states/BasketStore";

function BasketsPage() {
     const {inBasketList} =BasketStore()
    return (
        <div>
            <h3 style={{fontWeight: "bold"}}>장바구니</h3>
            {inBasketList.length>0
                ?(<BasketProducts/>)
                :(<BasketsEmpty/>)}

        </div>
    );
}

export default BasketsPage;