const express = require("express");
const authorize = require("../middleware/roleMiddleware")
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const applicationController = require("../controllers/applicationController");

// Create
router.post("/", auth, applicationController.createApplication);

// Get all applications for logged-in user
router.get("/", auth, applicationController.getApplications);

// Get applications by status
router.get("/filter", auth, applicationController.getApplicationsByStatus);

// Get one application
router.get("/:id", auth, applicationController.getApplicationById);

// Update
router.put("/:id", auth, applicationController.updateApplication);

// Delete
router.delete("/:id", auth, applicationController.deleteApplication);

// Get all applications for admin
router.get("/all", auth, authorize("admin"), applicationController.getAllApplications);


module.exports = router;
