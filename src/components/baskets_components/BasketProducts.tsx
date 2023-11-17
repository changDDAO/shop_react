import React from 'react'
import {Button, Container} from "react-bootstrap";
import {IconButton} from "@mui/material";
import {RiDeleteBin6Line as DeleteIcon} from "react-icons/ri";

function BasketProducts(){
return (

       <Container>
           <Container className="basket-product-container">
               <div className="baskets-left-section">
                   <div className="baskets-left-img">
                       <img height="100%" width="100%" src="assets/reactimg.png"/>
                   </div>
                   <div className="left-description">
                       <div style={{fontSize: "14px", color: "grey", fontWeight: "bold"}}>category</div>
                       <div style={{marginTop: "3px", fontWeight: 'bold'}}>product name</div>
                       <div style={{marginTop: "9px"}}>계산값:</div>
                   </div>
               </div>
               <div className="baskets-center">
                   <Button variant="outline-dark" style={{marginRight: "10px"}}>-</Button>
                   <Button variant="outline-dark" disabled={true}>1</Button>
                   <Button variant="outline-dark" style={{marginLeft: "10px"}}>+</Button>

               </div>
               <IconButton style={{fontSize: "20px", marginBottom: "30px"}}>
                   <DeleteIcon/>
               </IconButton>
           </Container>
           <Container className="basket-product-container">
               <div className="baskets-left-section">
                   <div className="baskets-left-img">
                       <img height="100%" width="100%" src="assets/reactimg.png"/>
                   </div>
                   <div className="left-description">
                       <div style={{fontSize: "14px", color: "grey", fontWeight: "bold"}}>category</div>
                       <div style={{marginTop: "3px", fontWeight: 'bold'}}>product name</div>
                       <div style={{marginTop: "9px"}}>계산값:</div>
                   </div>
               </div>
               <div className="baskets-center">
                   <Button variant="outline-dark" style={{marginRight: "10px"}}>-</Button>
                   <Button variant="outline-dark" disabled={true}>1</Button>
                   <Button variant="outline-dark" style={{marginLeft: "10px"}}>+</Button>

               </div>
               <IconButton style={{fontSize: "20px", marginBottom: "30px"}}>
                   <DeleteIcon/>
               </IconButton>
           </Container>
           <div className="baskets-calc-btns">
               <Button variant="outline-secondary" disabled={true} style={{
                   marginRight: "20px",
                   color:"black",
                   backgroundColor:"#e5d6ac",
                   fontSize: "24px"}}>합계 : $</Button>
               <Button variant="outline-secondary" size="lg">계산하기</Button>
           </div>
       </Container>

);
}
export default BasketProducts;