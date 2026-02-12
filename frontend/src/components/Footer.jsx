import React from "react";

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Left Text */}
          <p className="text-muted text-sm">
            © 2026 MyPortfolio, Inc.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-lg">

            <span className="text-muted hover:text-primary cursor-pointer transition">
              📷
            </span>

            <span className="text-muted hover:text-primary cursor-pointer transition">
              💼
            </span>

            <span className="text-muted hover:text-primary cursor-pointer transition">
              🐦
            </span>

            <span className="text-muted hover:text-primary cursor-pointer transition">
              💻
            </span>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;