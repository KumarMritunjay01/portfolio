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
    <section className="flex items-center justify-center px-6 py-4">
      <div className="max-w-lg w-full text-center">

        <h1 className="text-3xl md:text-4xl font-bold">
          My <span className="text-primary">Resume</span>
        </h1>

        <p className="mt-8 text-muted">
          View or download my professional resume
        </p>

        <div className="
          mt-6 rounded-2xl border border-border
          bg-background/40 backdrop-blur-xl
          shadow-lg
          p-12
        ">

          {loading ? (
            <p className="text-muted">Loading Resume...</p>
          ) : resume?.resumeUrl ? (
            <div className="flex flex-col items-center">

              <div className="
                w-14 h-14 rounded-xl
                bg-primary/10 border border-primary/20
                flex items-center justify-center
                mb-2
              ">
                <FileText size={28} className="text-primary" />
              </div>

              <p className="text-lg font-medium">Resume.pdf</p>
              <p className="text-sm text-muted mb-5">PDF Document</p>

              <div className="flex gap-3">

                <button
                  onClick={() => window.open(resume.resumeUrl, "_blank")}
                  className="
                    px-4 py-2 rounded-lg
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
                    px-4 py-2 rounded-lg
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
