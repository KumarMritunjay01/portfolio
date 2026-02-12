import React from "react";
import profileImage from "../assets/profile.jpg";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      {/* <Navbar/> */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                About Me
              </h2>

              <p className="mt-6 text-muted leading-relaxed">
                I am a passionate MERN Stack Developer who loves building
                modern, responsive, and user-friendly web applications.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={profileImage}
                alt="About"
                className="w-72 rounded-xl border border-border"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;