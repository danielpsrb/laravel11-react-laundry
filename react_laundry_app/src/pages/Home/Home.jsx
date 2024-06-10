import React from "react";
import "../../pages/Home/home.css";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Home;
