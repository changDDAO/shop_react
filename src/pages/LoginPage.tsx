import React from 'react'
import {Button, Container, Form} from 'react-bootstrap';

function LoginPage(){
return (
   <div>
       <div>
           <Container className="login-container">
               <div className="login-account-container">
                   <Form.Label style={{fontWeight:"bold", fontSize:"1.3rem"}}>Account</Form.Label>
                   <Form.Control
                       type="text"
                       id="login-id-input"/>
               </div>
               <div className="login-password-container">
                   <Form.Label style={{fontWeight:"bold", fontSize:"1.3rem"}}>Password</Form.Label>
                   <Form.Control
                       type="password"
                       id="login-password-input"/>
                   <Form.Text muted>
                       비밀번호는 8자 이상, 대문자, 소문자, 특수문자 모두 입력해야합니다.
                   </Form.Text>
               </div>
               <div className="login-btns">
                   <Button variant="success" size="lg">회원가입</Button>
                   <Button className="click-login-btn" variant="primary" size="lg">로그인</Button>
               </div>

           </Container>

       </div>
   </div>
);
}
export default LoginPage;