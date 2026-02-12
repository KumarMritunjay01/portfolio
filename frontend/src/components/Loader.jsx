import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">

      <div className="flex flex-col items-center gap-6">

        {/* Animated Spinner */}
        <div className="w-12 h-12 border-4 border-border border-t-primary rounded-full animate-spin" />

        {/* Loading Text */}
        <p className="text-muted text-sm tracking-wider">
          Loading...
        </p>

      </div>
    </div>
  );
}

export default Loader;