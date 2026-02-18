import React, { useEffect, useState } from "react";
import { getResume } from "../services/api.js";
import { FileText } from "lucide-react";

function Resume() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResume()
      .then((res) => setResume(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-xl w-full text-center">

        {/* HEADER */}
        <h1 className="text-3xl md:text-5xl font-bold">
          My <span className="text-primary">Resume</span>
        </h1>

        <p className="mt-3 text-muted">
          View or download my professional resume
        </p>

        {/* SINGLE CONTAINER */}
        <div className="
          mt-10 rounded-2xl border border-border
          bg-background/40 backdrop-blur-xl
          shadow-lg
          p-10
        ">

          {loading ? (
            <p className="text-muted">Loading Resume...</p>
          ) : resume?.resumeUrl ? (
            <div className="flex flex-col items-center">

              {/* BIG ICON */}
              <div className="
                w-16 h-16 rounded-2xl
                bg-primary/10 border border-primary/20
                flex items-center justify-center
                mb-6
              ">
                <FileText size={32} className="text-primary" />
              </div>

              {/* FILE TEXT */}
              <p className="text-lg font-medium">
                Resume.pdf
              </p>

              <p className="text-sm text-muted mb-6">
                PDF Document
              </p>

              {/* BUTTONS */}
              <div className="flex gap-3">

                <button
                  onClick={() => window.open(resume.resumeUrl, "_blank")}
                  className="
                    px-5 py-2 rounded-lg
                    bg-primary text-white
                    hover:scale-105 active:scale-95
                    transition duration-200
                  "
                >
                  View
                </button>

                <button
                  onClick={() => window.open(resume.resumeUrl, "_blank")}
                  className="
                    px-5 py-2 rounded-lg
                    border border-border
                    hover:bg-primary hover:text-white
                    transition duration-200
                  "
                >
                  Download
                </button>

              </div>

            </div>
          ) : (
            <p className="text-muted">Resume not available</p>
          )}

        </div>
      </div>
    </section>
  );
}

export default Resume;
