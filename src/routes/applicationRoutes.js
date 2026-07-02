const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const applicationController = require("../controllers/applicationController");

// Create
router.post("/", auth, applicationController.createApplication);

// Get all applications for logged-in user
router.get("/", auth, applicationController.getApplications);

// Get one application
router.get("/:id", auth, applicationController.getApplicationById);

// Update
router.put("/:id", auth, applicationController.updateApplication);

// Delete
router.delete("/:id", auth, applicationController.deleteApplication);

module.exports = router;
