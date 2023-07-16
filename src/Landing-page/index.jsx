import React from "react";
import "../Landing-page/style.css";
import Nav from "../components/Navbar/index"
import Hero from "../components/Hero";
import Catalog from "../components/Catalog/Index";
import About from "../components/About";
import Footer from "../components/Footer";


export default function Landing() {
  return (
    <div className="landing">
     <Nav />
      <Hero />
      <About/>
      <Catalog />
      <Footer />
    </div>
  );
} 
