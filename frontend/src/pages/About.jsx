import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <Navbar />

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-10">
          About Me 👨‍💻
        </h1>

        {/* Paragraphs */}
        <div className="space-y-6 text-muted leading-relaxed">

          <p>
            Hi, I'm{" "}
            <span className="text-primary font-semibold">
              Mritunjay Kumar
            </span>
            , a passionate MERN Stack Developer from India 🇮🇳.
          </p>

          <p>
            I love building modern, scalable, and user-friendly web applications.
            My main focus is on React.js, Node.js, Express.js, and MongoDB.
          </p>

          <p>
            I have worked on several projects including a Blog Website, 
            Note-Making App, and an E-Commerce Platform using the MERN Stack.
          </p>

          <p>
            My goal is to become a highly skilled Software Developer and work on
            impactful real-world products 🚀.
          </p>

        </div>
      </div>
    </div>
  );
}

export default About;