import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    technology: {
      type: String,
      required: true,
    },
    issuer: {
      type: String,
    },
    issueDate: {
      type: String,
    },
    credentialId: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    credentialUrl: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true } // ✅ createdAt & updatedAt auto
);

export default mongoose.model("Certificate", certificateSchema);