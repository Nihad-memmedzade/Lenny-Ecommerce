import React from "react";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import "./App.css";
import {Home, ProductList, ProductDetail, ShoppingCart} from "./pages/index"
import { Routes, Route } from "react-router-dom";
import {route1} from "./routes/route1"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
  <Header/>
     <Routes>
      <Route path={route1.Home} element={<Home/>}/>
      <Route path={route1.ProductList} element={<ProductList/>}/>
      <Route path={route1.ProductDetail} element={<ProductDetail/>}/>
      <Route path={route1.ShoppingCart} element={<ShoppingCart/>}/>
     </Routes>
     <Footer/>
     <ToastContainer />
    </>
  );
}

export default App;
