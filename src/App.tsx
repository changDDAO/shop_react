import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SpecificPage from "./pages/SpecificPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/specific" element={<SpecificPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
