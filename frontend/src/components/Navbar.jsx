import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;

    root.dataset.theme =
      root.dataset.theme === "dark" ? "light" : "dark";
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border relative">
  
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-primary">
          MyPortfolio
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          {/* Links */}
          <div className="flex gap-6 text-sm font-medium">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/skill">Skills</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>

          {/* Theme Toggle */}
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
        <div className="flex md:hidden items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-lg border border-border text-foreground"
          >
            🌙
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-foreground"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
      <div className="md:hidden absolute right-5 top-16 flex flex-col gap-4 p-6 w-36 text-base font-lg bg-background rounded-xl shadow-lg items-end text-right">
          <NavItem to="/" onClick={() => setMenuOpen(false)}>Home</NavItem>
          <NavItem to="/about" onClick={() => setMenuOpen(false)}>About</NavItem>
          <NavItem to="/skill" onClick={() => setMenuOpen(false)}>Skills</NavItem>
          <NavItem to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavItem>
          <NavItem to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}   // ✅ ADD THIS LINE
      className={({ isActive }) =>
        `
        transition duration-300
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