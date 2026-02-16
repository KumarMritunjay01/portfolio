import React from "react";

function CertificateCard({ cert }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 bg-background">
      
      {/* Image */}
      <img
        src={cert.imageUrl}
        alt={cert.title}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-foreground">
          {cert.title}
        </h2>

        <p className="text-sm text-primary mt-1">
          {cert.technology}
        </p>

        {cert.issuer && (
          <p className="text-xs opacity-60 mt-2">
            {cert.issuer}
          </p>
        )}

        {/* Button */}
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm text-primary hover:underline"
          >
            View Credential →
          </a>
        )}
      </div>
    </div>
  );
}

export default CertificateCard;