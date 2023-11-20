import React from 'react'
import {BsCart4 as CartIcon} from "react-icons/bs";
import {FaUserTie as LoginPageIcon} from "react-icons/fa";
import {FaUserCheck as LoginIcon} from "react-icons/fa";
import {FaUserTimes as LogoutIcon} from "react-icons/fa";
import {Outlet, useNavigate} from 'react-router-dom';
import {Container, Navbar} from "react-bootstrap";
import {IconButton} from "@mui/material";
import BasketStore from "../states/BasketStore";
import UserStore from "../states/userStore";
import {auth} from "../firebase/firebase"
import { signOut } from '@firebase/auth';
import Alert from 'sweetalert2';


function Layout() {
    const navigate = useNavigate();
    const {setLoginStatus, setCleanEmail} = UserStore();

    function goLoginPage() {
        navigate("/login");
    }

    function goHomePage() {
        navigate("/");
    }
    function goBasketsPage(){
        navigate("/baskets");
    }
    function logout() {
        setLoginStatus();
        setCleanEmail();
        signOut(auth)
            .then(()=>Alert.fire("로그아웃 되었습니다."))
            .catch(err => Alert.fire({
                text:err,
                icon:"error",
            }));
    }
    const {inBasketList} = BasketStore();
    const {email, loginStatus} = UserStore();




    return (
        <div>
        <Navbar bg="light" className="justify-content-between navbar">
            <div>
            <IconButton style={{marginLeft:"30px"}} onClick={goHomePage}><h2 className="home-btn"
            >SHOP</h2></IconButton>
                <span style={{marginLeft:"10px",
                fontSize:"15px",fontWeight:"bold"}}>
                    {(email!="")?`반갑습니다. ${email}님`:""}</span>
            </div>
            <div className="right-icons justify-content-around">
                <IconButton onClick={goBasketsPage}><CartIcon className="cart-icon"
                                                              style={{position:"relative"}}/>
                <div className="cart-icon-count">{inBasketList.length}</div>
                </IconButton>

                <IconButton onClick={goLoginPage}><LoginPageIcon className="login-icon" fontSize="0.85em"/></IconButton>
                {loginStatus?
                    (<IconButton
                    ><LoginIcon className="lo-success-icon"  onClick={logout}/></IconButton>)
                    :(<IconButton><LogoutIcon className="lo-fail-icon"/></IconButton>)
                }
            </div>
        </Navbar>
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
        </div>
    );
}

export default Layout;