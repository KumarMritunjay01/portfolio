import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">

      {/* Navbar Always Visible */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer Always Visible */}
      <Footer />

    </div>
  );
}

export default Layout;