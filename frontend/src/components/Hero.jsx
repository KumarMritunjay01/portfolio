import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center">
  <div className="max-w-6xl mx-auto px-6 w-full">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT → TEXT */}
      <div className="text-center md:text-left">

        <div className="inline-block px-4 py-1 rounded-full border border-border text-muted text-sm">
          MERN Stack Developer
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold">
          Hello, I am{" "}
          <span className="text-primary">Mritunjay Kumar</span>
        </h1>

        <p className="mt-4 text-muted text-lg">
          Passionate about building & coding modern web applications
        </p>

      </div>

      {/* RIGHT → IMAGE */}
      <div className="flex justify-center">

        <img
          src="https://res.cloudinary.com/dkddz7kio/image/upload/v1771153187/techImage_nafwnz.jpg"
          alt="image"
          className="w-72 rounded-2xl border border-border shadow-sm"
        />

      </div>

    </div>
  </div>
</section>

  );
}

export default Hero;
