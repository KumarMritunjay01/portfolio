import React, { useEffect, useState } from "react";
import { getCertificates } from "../services/api";
import CertificateCard from "../components/CertificateCard";

function Cirtificate() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);   // ✅ NEW

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const res = await getCertificates();
      setCertificates(res.data);
    } catch (error) {
      console.log("Error fetching certificates:", error);
    } finally {
      setLoading(false);   // ✅ STOP LOADER
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-10">

      <h1 className="text-3xl font-bold text-primary mb-10 text-center">
        My Certificates
      </h1>

      {/* ✅ Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <CertificateCard key={cert._id} cert={cert} />
          ))}
        </div>
      )}

    </div>
  );
}

export default Cirtificate;