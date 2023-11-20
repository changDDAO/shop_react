import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BasketsPage from "./pages/BasketsPage";
import LoginPage from "./pages/LoginPage";
import {AuthContext} from "./firebase/authContext";

function App() {

  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/baskets" element={<BasketsPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
