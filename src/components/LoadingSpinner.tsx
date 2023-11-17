import React from 'react'
import {Container, Spinner} from "react-bootstrap";

function LoadingSpinner(){
return (
   <Container className="loading-container">
       <div>
       <Spinner animation="border" variant="primary" />
       <Spinner animation="border" variant="secondary" />
       <Spinner animation="border" variant="success" />
       </div>
       <h1>Wait for a seconds</h1>

   </Container>
);
}
export default LoadingSpinner;