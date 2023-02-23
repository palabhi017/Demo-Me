import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from "./HomePage/Homepage"
import Productpage from "./Productpage"
import SingleProductPage from "./SingleProductPage"
import CartPage from "./CartPage"
import LoginPage from "./LoginPage"
import SignIn from "./SignIn"
import Adminpanel from "./Adminpanel"
import PaymentPage from "./PaymentPage"

const AllRoutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/products" element={<Productpage/>}/>
      <Route path="/product/:id" element={<SingleProductPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/payment" element={<PaymentPage/>}/>
      <Route path="/Admin" element={<Adminpanel/>}/>
   </Routes>
  )
}

export default AllRoutes