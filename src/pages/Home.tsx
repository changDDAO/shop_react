import React, {useEffect} from 'react'
import {Alert, Button, Card, Container, Spinner} from "react-bootstrap";
import {Category} from "../states/ProductStore";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductStore from "../states/ProductStore";
import BasketStore from "../states/BasketStore";
import {Product} from "../states/DefinedType";

function Home(){
    const {setProductList, productList, loading} = ProductStore();
    const {addProductBasket,inBasketList} = BasketStore()
    useEffect(() => {
        setProductList();
        }, []);

return (
    <div>
       <Container className="home-container">
           <h2 style={{fontWeight:"bold"}}>Products</h2>
           <div className="home-btns">
               <Button size="lg" variant="outline-secondary"
                       onClick={()=>{setProductList(Category.ALL)}}>모두</Button>
               <Button size="lg" variant="outline-secondary"
                       onClick={()=>{setProductList(Category.ELECTRONICS)}}>전자기기</Button>
               <Button size="lg" variant="outline-secondary"
                       onClick={()=>{setProductList(Category.JEWElERY)}}>쥬얼리</Button>
               <Button size="lg" variant="outline-secondary"
                       onClick={()=>{setProductList(Category.MENS)}}>남성의류</Button>
               <Button size="lg" variant="outline-secondary"
                       onClick={()=>{setProductList(Category.WOMENS)}}>여성의류</Button>
           </div>
           <div className="home-showing-text">
               Showing :{productList.length} items
           </div>
       </Container>
        {loading?(<LoadingSpinner/>):(
       <Container className="products-container" >
           {productList.map((product)=>(
           <Card style={{ width: '15rem', height:"20rem",alignItems:"center", marginBottom:"10px"}} key={product.id}>

               <Card.Img variant="top" src={product.image} style={{height:"150px", width:"120px"
               ,marginTop:"15px"}}/>

               <Card.Body>
                   <h4 className="card-description">{product.title}</h4>
                   <div className="card-footer">
                   <Button variant="outline-secondary" size="sm"
                           onClick={()=>{addProductBasket(product)}}>장바구니에 담기</Button>
                   <div className="product-price-text">${product.price}</div>
                   </div>
               </Card.Body>
           </Card>
               ))}
       </Container>)}
   </div>
);
}
export default Home;