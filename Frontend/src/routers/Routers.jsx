import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Detailingcars from "../pages/Detainlingcar"//new
import LoginForm from "../components/LoginForm/LoginForm";
import Login from "../components/LoginForm/LoginFormSign";
import PaymentForm from "../pages/Payment";
import Blog from "../pages/Blog";
import PrivacyPolicy from "../pages/Privacy";
import BlogItem from "../components/UI/BlogItem";
import Sucess from "../components/Sucess";
import Cancel from "../components/Cancel";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs/:id" element={<BlogItem />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/detailingwork" element={<Detailingcars />} />
      <Route path="/signUp" element={<LoginForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<PaymentForm />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
       {/* <Route path="/sucess" element={<Sucess />} /> */}
      {/* <Route path="/cancel" element={<Cancel />} />  */}
    </Routes>
  );
};

export default Routers;
