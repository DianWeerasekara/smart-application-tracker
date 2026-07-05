const express = require("express");
const authorize = require("../middleware/roleMiddleware")
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const applicationController = require("../controllers/applicationController");

/**
 * @swagger
 * /api/application:
 *   post:
 *     summary: Create a new job application
 *     tags:
 *       - Applications
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - company_name
 *               - position
 *             properties:
 *               company_name:
 *                 type: string
 *               company_website:
 *                 type: string
 *               company_location:
 *                 type: string
 *               position:
 *                 type: string
 *               job_type:
 *                 type: string
 *                 enum: [Full-time, Part-time, Internship, Contract, Freelance]
 *               work_mode:
 *                 type: string
 *                 enum: [Remote, Hybrid, On-site]
 *               salary:
 *                 type: string
 *               job_url:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Applied, Interview, Assessment, Offer, Rejected, Accepted, Withdrawn]
 *               applied_date:
 *                 type: string
 *                 format: date-time
 *               closing_date:
 *                 type: string
 *                 format: date-time
 *               interview_date:
 *                 type: string
 *                 format: date-time
 *               recruiter_name:
 *                 type: string
 *               recruiter_email:
 *                 type: string
 *               recruiter_phone:
 *                 type: string
 *               resume_url:
 *                 type: string
 *               cover_letter_url:
 *                 type: string
 *               notes:
 *                 type: string
 *               priority:
 *                 type: string
 *                 enum: [Low, Medium, High]
 *               follow_up_date:
 *                 type: string
 *                 format: date-time
 *               is_favorite:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Application created successfully
 *       500:
 *         description: Server error
 */

// Create
router.post("/", auth, applicationController.createApplication);

/**
 * @swagger
 * /api/application:
 *   get:
 *     summary: Get all applications for the logged-in user
 *     tags:
 *       - Applications
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of applications
 *       500:
 *         description: Server error
 */

// Get all applications for logged-in user
router.get("/", auth, applicationController.getApplications);

/**
 * @swagger
 * /api/application/filter:
 *   get:
 *     summary: Get applications by status
 *     tags:
 *       - Applications
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *           enum:
 *             - Applied
 *             - Interview
 *             - Assessment
 *             - Offer
 *             - Rejected
 *             - Accepted
 *             - Withdrawn
 *     responses:
 *       200:
 *         description: Filtered applications returned successfully
 *       400:
 *         description: Status is required
 *       500:
 *         description: Server error
 */

// Get applications by status
router.get("/filter", auth, applicationController.getApplicationsByStatus);

/**
 * @swagger
 * /api/application/{id}:
 *   get:
 *     summary: Get an application by ID
 *     tags:
 *       - Applications
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Application retrieved successfully
 *       404:
 *         description: Application not found
 *       500:
 *         description: Server error
 */

// Get one application
router.get("/:id", auth, applicationController.getApplicationById);

/**
 * @swagger
 * /api/application/{id}:
 *   put:
 *     summary: Update an application
 *     tags:
 *       - Applications
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company_name:
 *                 type: string
 *               company_website:
 *                 type: string
 *               company_location:
 *                 type: string
 *               position:
 *                 type: string
 *               job_type:
 *                 type: string
 *                 enum: [Full-time, Part-time, Internship, Contract, Freelance]
 *               work_mode:
 *                 type: string
 *                 enum: [Remote, Hybrid, On-site]
 *               salary:
 *                 type: string
 *               job_url:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Applied, Interview, Assessment, Offer, Rejected, Accepted, Withdrawn]
 *               applied_date:
 *                 type: string
 *                 format: date-time
 *               closing_date:
 *                 type: string
 *                 format: date-time
 *               interview_date:
 *                 type: string
 *                 format: date-time
 *               recruiter_name:
 *                 type: string
 *               recruiter_email:
 *                 type: string
 *               recruiter_phone:
 *                 type: string
 *               resume_url:
 *                 type: string
 *               cover_letter_url:
 *                 type: string
 *               notes:
 *                 type: string
 *               priority:
 *                 type: string
 *                 enum: [Low, Medium, High]
 *               follow_up_date:
 *                 type: string
 *                 format: date-time
 *               is_favorite:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Application updated successfully
 *       404:
 *         description: Application not found
 *       500:
 *         description: Server error
 */

// Update
router.put("/:id", auth, applicationController.updateApplication);

/**
 * @swagger
 * /api/application/{id}:
 *   delete:
 *     summary: Delete an application
 *     tags:
 *       - Applications
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Application deleted successfully
 *       404:
 *         description: Application not found
 *       500:
 *         description: Server error
 */

// Delete
router.delete("/:id", auth, applicationController.deleteApplication);

/**
 * @swagger
 * /api/application/all:
 *   get:
 *     summary: Get all applications (Admin only)
 *     tags:
 *       - Applications
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all applications
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden - Admin only
 *       500:
 *         description: Server error
 */

// Get all applications for admin
router.get("/all", auth, authorize("admin"), applicationController.getAllApplications);


module.exports = router;
