import React from "react";
import Navbar from "./component/Navbar";
import Advertisement from "./component/Advertisement";
import Product from "./component/Product";
import Services from "./component/Services";
import MemberShip from "./component/MemberShip";
import Calculator from "./component/Calculator";
import RateUs from "./component/RateUs";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
   
      <Navbar />
      <Advertisement />
      <Product />
      <Services />
      <MemberShip />
      <Calculator />
      <RateUs />
      <Footer />
    </>
  );
}
