import React from "react";
import profileImage from "../assets/profile.jpg";

function About() {
  return (
    <section className="bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* ================= HEADER ================= */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            About Me 
          </h1>
          <p className="mt-4 text-muted">
            Get to know more about me, my background & experience
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-72 rounded-2xl border border-border shadow-sm"
            />
          </div>

          {/* SUMMARY */}
          <div>
            <h2 className="text-2xl font-semibold">
              Professional Summary
            </h2>

            <p className="mt-4 text-muted leading-relaxed">
              MERN Stack Developer with hands-on experience in building
              scalable web applications using React.js, Next.js, Node.js,
              Express.js, and MongoDB. Passionate about crafting clean UI,
              solving real-world problems, and continuously improving
              development skills.
            </p>

            {/* Quick Info */}
            <div className="mt-6 space-y-2 text-sm">

              <p>
                🎓 <span className="text-muted">B.E. Information Technology</span>
              </p>

              <p>
                📍 <span className="text-muted">Pune, Maharashtra</span>
              </p>

              <p>
                💼 <span className="text-muted">Full Stack Developer Intern</span>
              </p>

            </div>
          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold text-center">
            Education 🎓
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold">
                B.E. Information Technology
              </h3>
              <p className="text-muted text-sm mt-2">
                Savitribai Phule Pune University
              </p>
              <p className="text-muted text-sm">
                CGPA: 8.41
              </p>
            </div>

            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold">HSC</h3>
              <p className="text-muted text-sm mt-2">
                Percentage: 66.6%
              </p>
            </div>

            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold">SSC</h3>
              <p className="text-muted text-sm mt-2">
                Percentage: 60.50%
              </p>
            </div>

          </div>
        </div>

        {/* ================= EXPERIENCE ================= */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold text-center">
            Experience 💼
          </h2>

          <div className="mt-10 space-y-6">

            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold">
                Full Stack Developer Intern — Syllogos Systems
              </h3>

              <ul className="mt-3 text-muted text-sm space-y-1">
                <li>✔ Built scalable online course platform</li>
                <li>✔ Designed REST APIs handling 500+ daily requests</li>
                <li>✔ Improved performance by 30%</li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold">
                Software Developer Intern — Voicetician Technology
              </h3>

              <ul className="mt-3 text-muted text-sm space-y-1">
                <li>✔ Developed 20+ reusable React components</li>
                <li>✔ Reduced UI bugs by 25%</li>
                <li>✔ API integration & state management</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;