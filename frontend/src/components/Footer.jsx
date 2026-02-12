import React from "react";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import {
  SiHackerrank,
  SiLeetcode,
} from "react-icons/si";

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Text */}
          <p className="text-muted text-sm">
            © 2026 Mritunjay Kumar. <sapn className="text-primary">Turning ideas into code.</sapn>
          </p>

          {/* Icons */}
          <div className="flex gap-6 text-xl">
            <a
              href="https://www.linkedin.com/in/mritunjay-kumar-92ba97256/"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-primary transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/KumarMritunjay01"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-primary transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://leetcode.com/u/KumarMritunjay525/"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-primary transition"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://www.hackerrank.com/profile/kmritunjay525"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-primary transition"
            >
              <SiHackerrank />
            </a>

             <a
              href="https://www.instagram.com/kmritunjay525/"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-primary transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100004783426640"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-primary transition"
            >
              <FaFacebook />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
