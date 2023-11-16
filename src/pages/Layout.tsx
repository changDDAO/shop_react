import React from 'react'
import {BsCart4 as CartIcon} from "react-icons/bs";
import {FaUserTie as LoginPageIcon} from "react-icons/fa";
import {FaUserCheck as LoginIcon} from "react-icons/fa";
import {FaUserTimes as LogoutIcon} from "react-icons/fa";
import {Outlet, useNavigate} from 'react-router-dom';
import {Container, Navbar} from "react-bootstrap";

function Layout() {
    const navigate = useNavigate();
    function goLoginPage(){
        navigate("/login");
    }
    function goHomePage(){
        navigate("/");
    }
    return (
        <div>
            <Navbar className="navbar bg-body-tertiary justify-content-between">
                <div className="home-btn" onClick={goHomePage}
                >SHOP</div>
                <div className="right-icons justify-content-around">
                    <CartIcon className="cart-icon"/>
                    <LoginPageIcon className="login-icon" fontSize="0.85em"
                    onClick={goLoginPage}/>
                    <LoginIcon className="lo-success-icon"/>
                    <LogoutIcon className="lo-fail-icon"/>
                </div>
            </Navbar>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;