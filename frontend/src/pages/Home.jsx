import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-background text-foreground">
      <h1>DEPLOY FORCE TEST 🔥</h1>
      <h1>DEPLOY FORCE TEST 🔥</h1>
      <Hero />
      <About/>
      <Contact/>
    </div>
  );
}

export default Home;