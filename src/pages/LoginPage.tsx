import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import React, {useContext, useState} from 'react'
import {Button, Container, Form} from 'react-bootstrap';
import {AuthContext} from "../firebase/authContext";
import {auth} from "../firebase/firebase";
import UserStore from "../states/userStore";
import Alert from 'sweetalert2';
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const userInfo = useContext(AuthContext);
    const navi = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const [isCreate, setIsCreate] = useState<boolean>(false);
    const {setLoginStatus, setStoreEmail, setCleanEmail} = UserStore();

    function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setEmail(event.target.value);
    }

    function handlePwd(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setPwd(event.target.value);
    }

    function handleClickCreate(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setIsCreate(pre => !pre);
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (isCreate) {
            createUserWithEmailAndPassword(auth, email, pwd)
                .then(() => {
                    Alert.fire({
                        title: "회원가입 성공",
                        icon: "success"
                    });
                })
                .catch(e => {
                    Alert.fire({
                        title:"회원가입 규칙을 지켜주세요",
                        icon:"warning",
                    })
                });
        } else {
            signInWithEmailAndPassword(auth, email, pwd)
                .then(() => {
                    setCleanEmail();
                    setLoginStatus();
                    setStoreEmail(email);
                    Alert.fire({
                        title: "로그인 성공",
                        icon: "success"
                    });
                    navi("/");
                }).catch(e => {
                Alert.fire({
                    text:"아이디 또는 비밀번호가 잘못되었습니다.",
                    icon:"warning",
                })
                setEmail("");
                setPwd("");
            });
        }
    }

    return (

        <Container>
            <Form className="login-container" onSubmit={handleSubmit}>
                <div className="login-account-container">
                    <Form.Label style={{fontWeight: "bold", fontSize: "1.3rem"}}>Account</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleEmail}
                        value={email}
                        id="login-id-input"/>
                </div>
                <div className="login-password-container">
                    <Form.Label style={{fontWeight: "bold", fontSize: "1.3rem"}}>Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={handlePwd}
                        value={pwd}
                        id="login-password-input"/>
                    <Form.Text muted>
                        비밀번호는 8자 이상,영문 대문자, 소문자, 특수문자 모두 입력해야 합니다.
                    </Form.Text>
                </div>
                <div className="login-btns">
                    <Button type="button" variant="success" size="lg" onClick={handleClickCreate}>
                        {isCreate ? "취소" : "회원가입"}
                    </Button>
                    <Button type="submit" className="click-login-btn"
                            variant="primary" size="lg">
                        {isCreate ? "계정 생성" : "로그인"}</Button>
                </div>

            </Form>

        </Container>

    );
}

export default LoginPage;