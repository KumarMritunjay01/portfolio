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
      <Hero />
      <About/>
      <Contact/>
    </div>
  );
}

export default Home;