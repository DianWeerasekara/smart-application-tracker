const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    // Owner of the application
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Company Details
    company_name: {
      type: String,
      required: true,
      trim: true,
    },

    company_website: {
      type: String,
    },

    company_location: {
      type: String,
    },

    // Job Details
    position: {
      type: String,
      required: true,
    },

    job_type: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract", "Freelance"],
    },

    work_mode: {
      type: String,
      enum: ["Remote", "Hybrid", "On-site"],
    },

    salary: {
      type: String,
    },

    job_url: {
      type: String,
    },

    // Application Status
    status: {
      type: String,
      enum: [
        "Applied",
        "Interview",
        "Assessment",
        "Offer",
        "Rejected",
        "Accepted",
        "Withdrawn",
      ],
      default: "Applied",
    },

    // Dates
    applied_date: {
      type: Date,
      default: Date.now,
    },

    closing_date: {
      type: Date,
    },

    interview_date: {
      type: Date,
    },

    // Contact Person
    recruiter_name: {
      type: String,
    },

    recruiter_email: {
      type: String,
    },

    recruiter_phone: {
      type: String,
    },

    // Documents
    resume_url: {
      type: String,
    },

    cover_letter_url: {
      type: String,
    },

    // Notes
    notes: {
      type: String,
    },

    // Priority
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    // Follow-up
    follow_up_date: {
      type: Date,
    },

    // Favorite
    is_favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Application", applicationSchema);
