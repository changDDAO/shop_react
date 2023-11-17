import React from 'react'
import {Container} from "react-bootstrap";
import {BsCart4 as CartIcon} from "react-icons/bs";
import {Link} from "react-router-dom";
function BasketsEmpty(){
return (
   <Container style={{marginTop:"30px"}}>

       <CartIcon fontSize="20em" style={{marginBottom:"50px"}}/>
       <h3>장바구니가 <span style={{fontSize:"1.5em", fontWeight:"bold",
       fontStyle:"italic" }}>'텅'</span>  비었습니다.</h3>
       <h5 style={{marginTop:"30px" ,marginBottom:"30px"}}>상품을 담아주세요</h5>
       <Link to="/" style={{
           color:"black",
       }}>계속 쇼핑하기</Link>
   </Container>
);
}
export default BasketsEmpty;