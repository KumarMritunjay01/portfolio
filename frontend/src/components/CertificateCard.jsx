import React from "react";

function CertificateCard({ cert }) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden 
    shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

      {/* ✅ Image Section */}
      <div className="w-full h-44 bg-muted flex items-center justify-center p-4">
        <img
          src={cert.imageUrl}
          alt={cert.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* ✅ Content */}
      <div className="p-5 space-y-2">

        <h2 className="text-base font-semibold text-foreground leading-snug">
          {cert.title}
        </h2>

        <p className="text-sm text-primary font-medium">
          {cert.technology}
        </p>

        {cert.issuer && (
          <p className="text-xs text-muted-foreground">
            {cert.issuer}
          </p>
        )}

        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary 
            hover:gap-2 transition-all duration-200 pt-2"
          >
            View Credential →
          </a>
        )}

      </div>
    </div>
  );
}

export default CertificateCard;