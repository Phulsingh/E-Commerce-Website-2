import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/User/Login";
import Categories from "./Components/Categories/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/categories" element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
