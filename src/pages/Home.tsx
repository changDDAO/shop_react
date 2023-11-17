import React from 'react'
import {Button, Card, Container, Spinner} from "react-bootstrap";

function Home(){
return (
   <div>
       <Container className="home-container">
           <h2 style={{fontWeight:"bold"}}>Products</h2>
           <div className="home-btns">
               <Button size="lg" variant="outline-secondary">모두</Button>
               <Button size="lg" variant="outline-secondary">전자기기</Button>
               <Button size="lg" variant="outline-secondary">쥬얼리</Button>
               <Button size="lg" variant="outline-secondary">남성의류</Button>
               <Button size="lg" variant="outline-secondary">여성의류</Button>
           </div>
       </Container>
       <div className="home-showing-text">
           Showing :{/*{}*/} items
       </div>
       <Container className="products-container">
           <Card style={{ width: '15rem' }}>
               <Card.Img variant="top" src="assets/reactimg.png" />
               <Card.Body>
                   <Card.Title>ProductName</Card.Title>
                   <div className="card-footer">
                   <Button variant="outline-secondary" size="sm">장바구니에 담기</Button>
                   <div className="product-price-text">가격</div>
                   </div>
               </Card.Body>
           </Card>

       </Container>
   </div>
);
}
export default Home;