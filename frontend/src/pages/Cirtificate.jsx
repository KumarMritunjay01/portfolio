import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { getCertificates } from "../services/api";
import CertificateCard from "../components/CertificateCard";

const CARDS_PER_SLIDE = 3;

function Certificate() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ==========================================
  // Fetch Certificates
  // ==========================================

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await getCertificates();

        console.log("Certificates:", res.data);

        setCertificates(res.data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setError("Unable to load certificates.");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  // ==========================================
  // Total Slides
  // ==========================================

  const totalSlides = Math.ceil(
    certificates.length / CARDS_PER_SLIDE
  );

  // ==========================================
  // Auto Slider
  // ==========================================

  useEffect(() => {
    if (
      loading ||
      error ||
      totalSlides <= 1 ||
      isPaused
    ) {
      return;
    }

    const interval = setInterval(() => {
      setActiveSlide((current) => {
        return (current + 1) % totalSlides;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [
    loading,
    error,
    totalSlides,
    isPaused,
  ]);

  // ==========================================
  // Get Current 3 Cards
  // ==========================================

  const startIndex =
    activeSlide * CARDS_PER_SLIDE;

  const visibleCertificates = certificates.slice(
    startIndex,
    startIndex + CARDS_PER_SLIDE
  );

  // ==========================================
  // Animation
  // ==========================================

  const slideVariants = {
    enter: {
      opacity: 0,
      x: 60,
    },

    center: {
      opacity: 1,
      x: 0,
    },

    exit: {
      opacity: 0,
      x: -60,
    },
  };

  // ==========================================
  // Loading
  // ==========================================

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  // ==========================================
  // Error
  // ==========================================

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-error">
          {error}
        </p>
      </section>
    );
  }

  // ==========================================
  // Empty
  // ==========================================

  if (certificates.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-muted">
          No certificates available.
        </p>
      </section>
    );
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <section className="text-foreground px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* ======================================
            Heading
        ======================================= */}

        <motion.div
          className="text-center mb-12"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold">
            My{" "}
            <span className="text-primary">
              Certificates
            </span>
          </h1>

          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Certifications and achievements from my
            learning and development journey.
          </p>
        </motion.div>

        {/* ======================================
            Slider
        ======================================= */}

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={activeSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
              "
            >
              {visibleCertificates.map((cert) => (
                <CertificateCard
                  key={cert._id}
                  cert={cert}
                />
              ))}
            </motion.div>

          </AnimatePresence>

        </div>

        {/* ======================================
            Slider Dots
        ======================================= */}

        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">

            {Array.from({
              length: totalSlides,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`
                  h-2.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeSlide === index
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-border"
                  }
                `}
                aria-label={`Show certificates ${index + 1}`}
              />
            ))}

          </div>
        )}

      </div>

    </section>
  );
}

export default Certificate;