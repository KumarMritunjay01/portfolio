import React from "react";

import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <Navbar />

      {/* Hero Container */}
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-primary">
            Mritunjay Kumar
          </span>{" "}
          👋
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-xl md:text-2xl text-secondary">
          MERN Stack Developer 🚀
        </h2>

        {/* Description */}
        <p className="mt-6 text-muted max-w-2xl mx-auto">
          I build modern web applications using React, Node.js, and MongoDB.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-background border border-border text-forground px-6 py-3 rounded-lg 
          hover:scale-105 hover:bg-primary hover:text-forground transition duration-300 active:scale-95 ">
            View Projects 🚀
          </button>

          <button className="border border-border px-6 py-3 rounded-lg 
          hover:bg-primary hover:text-forground transition duration-300">
            Contact Me 📩
          </button>

        </div>
      </div>
    </div>
  );
}

export default Home;