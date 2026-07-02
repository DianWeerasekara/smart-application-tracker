const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const applicationController = require("../controllers/applicationController");

router.post("/", auth, applicationController.createApplication);

router.get("/", auth, applicationController.getApplications);

router.get("/:id", auth, applicationController.getApplication);

router.put("/:id", auth, applicationController.updateApplication);

router.delete("/:id", auth, applicationController.deleteApplication);

module.exports = router;
