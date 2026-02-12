import React from "react";

function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="text-center">

          {/* Badge */}
          <div className="inline-block px-4 py-1 rounded-full border border-border text-muted text-sm">
            MERN Stack Developer 🚀
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            Hello, I am{" "}
            <span className="text-primary">Mritunjay Kumar</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-muted text-lg md:text-xl">
            I build modern & scalable web applications
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="bg-primary text-background px-6 py-3 rounded-lg 
            hover:scale-105 transition duration-300 active:scale-95">
              My Resume
            </button>

            <button className="border border-border px-6 py-3 rounded-lg 
            hover:bg-primary hover:text-background transition duration-300">
              Contact Me
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;