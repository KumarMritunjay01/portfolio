import React, { useState , useEffect } from "react";
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

    // ✅ Persist theme
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border relative">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

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

              {/* Name */}
              <h2 className="text-xl font-bold text-foreground">
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
            <NavItem to="/contact">Contact</NavItem>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-lg border border-border 
            text-foreground hover:bg-primary hover:text-white 
            hover:scale-105 active:scale-95 transition duration-300 cursor-pointer"
          >
            🌙
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">

          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-lg border border-border text-foreground cursor-pointer"
          >
            🌙
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-foreground cursor-pointer"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu (FIXED POSITIONING) */}
      <div
        className={`
          md:hidden absolute top-full right-4 mt-2
          w-40 bg-background border border-border
          rounded-xl shadow-lg p-5 flex flex-col gap-4 text-right
          transition-all duration-300 origin-top
          ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        <NavItem to="/" onClick={() => setMenuOpen(false)}>Home</NavItem>
        <NavItem to="/about" onClick={() => setMenuOpen(false)}>About</NavItem>
        <NavItem to="/skill" onClick={() => setMenuOpen(false)}>Skills</NavItem>
        <NavItem to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavItem>
        <NavItem to="/cirtificate" onClick={() => setMenuOpen(false)}>Cirtificate</NavItem>
        <NavItem to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
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