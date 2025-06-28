import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Vodka from './Vodka'
import Whiskey from './Whiskey'
import Beer from './Beer'
import Rum from './Rum'
import Navigation from './Navigation'
import Domestic from './Domestic'
import Cocktail from './Cocktail'
import ProductPage from './ProductPage'
import Address_page from './Address_page'
import Billing_page from './Billing_page'
import LoginPage from './LoginPage'
import About from './About'
import MyCard from './MyCard'
import Order from './Order'
import Signup from './Signup'
export default function Layout() {

  const [MyCart, setCart] = useState([]);

  function AddData(data) {

    var available = false;

    MyCart.forEach((item) => {
      if (item.Product_name == data.Product_name) {
        available = true;
      }
    });

    if (available) {
      alert("Product already available in cart");
      return;
    }

    setCart([...MyCart, data]);
    alert("Data Successfully added in cart");

  }

  const Quantitychange = (data, x) => {
    // console.log(data,x);

    var ind;

    MyCart.forEach((myData, index) => {
      if (myData.id == data.id) {
        ind = index;
      }
    });


    MyCart[ind].Product_quantity += x;

    if (MyCart[ind].Product_quantity == 0) {
      MyCart[ind].Product_quantity = 1;
    };

    setCart([...MyCart]);

  }



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation size={MyCart.length} />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart CartData={MyCart} setCart={setCart} Quantitychange={Quantitychange} />} />
          <Route path='/vodka' element={<Vodka AddItem={AddData} />} />
          <Route path='/whiskey' element={<Whiskey AddToCart={AddData} />} />
          <Route path='/Beer' element={<Beer AddToCart1={AddData} />} />
          <Route path='/Rum' element={<Rum AddToCart2={AddData} />} />
          <Route path='/Domestic' element={<Domestic AddToCart3={AddData} />} />
          <Route path='/Cocktail' element={<Cocktail AddToCart4={AddData} />} />
          <Route path='/Details' element={<ProductPage />} />
          <Route path='/Address_page' element={<Address_page />} />
          <Route path='/Billing_page' element={<Billing_page />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/About' element={<About />} />
          <Route path='/MyCard' element={<MyCard />} />
          <Route path='/order' element={<Order />} />
          <Route path='/Signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
