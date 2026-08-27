import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundAnimation from "./BackgroundAnimation";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">

      {/* Global Background Animation */}
      <BackgroundAnimation />

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </div>

    </div>
  );
}

export default Layout;