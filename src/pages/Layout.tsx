import React from 'react'
import {BsCart4 as CartIcon} from "react-icons/bs";
import {FaUserTie as LoginPageIcon} from "react-icons/fa";
import {FaUserCheck as LoginIcon} from "react-icons/fa";
import {FaUserTimes as LogoutIcon} from "react-icons/fa";
import {Outlet, useNavigate} from 'react-router-dom';
import {Container, Navbar} from "react-bootstrap";
import {IconButton} from "@mui/material";
import BasketStore from "../states/BasketStore";

function Layout() {
    const navigate = useNavigate();

    function goLoginPage() {
        navigate("/login");
    }

    function goHomePage() {
        navigate("/");
    }
    function goBasketsPage(){
        navigate("/baskets");
    }
    const {inBasketList} = BasketStore();



    return (
        <div>
        <Navbar bg="light" className="justify-content-between navbar">
            <IconButton style={{marginLeft:"30px"}}><h2 className="home-btn" onClick={goHomePage}
            >SHOP</h2></IconButton>
            <div className="right-icons justify-content-around">
                <IconButton><CartIcon className="cart-icon"
                                      onClick={goBasketsPage}
                style={{position:"relative"}}/>
                <div className="cart-icon-count">{inBasketList.length}</div>
                </IconButton>

                <IconButton><LoginPageIcon className="login-icon" fontSize="0.85em"
                                           onClick={goLoginPage}/></IconButton>
                <IconButton><LoginIcon className="lo-success-icon"/></IconButton>
                <IconButton><LogoutIcon className="lo-fail-icon"/></IconButton>
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