import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    const newTheme =
      root.dataset.theme === "dark" ? "light" : "dark";

    root.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border relative">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">

        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="
              w-9 h-9 rounded-full 
              bg-primary text-primary-foreground
              flex items-center justify-center
              text-sm font-bold
            ">
              MK
            </div>

            <h2 className="text-lg md:text-xl font-bold text-foreground">
              MRITUNJAY
            </h2>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <div className="flex gap-6 text-sm font-medium">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/skill">Skills</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/cirtificate">Cirtificate</NavItem>
            <NavItem to="/resume">Resume</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-lg border border-border 
            text-foreground hover:bg-primary hover:text-white 
            hover:scale-105 active:scale-95 transition duration-300"
          >
            🌙
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">

          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg border border-border 
            flex items-center justify-center text-foreground"
          >
            🌙
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 rounded-lg border border-border 
            flex items-center justify-center text-xl text-foreground"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* ✅ Improved Mobile Menu */}
      <div
        className={`
          md:hidden absolute top-full left-0 w-full
          bg-background/95 backdrop-blur-xl
          border-b border-border
          transition-all duration-300 ease-in-out
          ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <div className="flex flex-col px-6 py-4 gap-3 text-sm font-medium">

          <NavItem to="/" onClick={() => setMenuOpen(false)}>Home</NavItem>
          <NavItem to="/about" onClick={() => setMenuOpen(false)}>About</NavItem>
          <NavItem to="/skill" onClick={() => setMenuOpen(false)}>Skills</NavItem>
          <NavItem to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavItem>
          <NavItem to="/cirtificate" onClick={() => setMenuOpen(false)}>Cirtificate</NavItem>
          <NavItem to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavItem>
          <NavItem to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `
        py-2 transition duration-300
        ${isActive
          ? "text-primary"
          : "text-foreground hover:text-primary"}
        `
      }
    >
      {children}
    </NavLink>
  );
}