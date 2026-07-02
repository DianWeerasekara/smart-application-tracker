const applicationService = require("../services/applicationService");

const createApplication = async (req, res) => {
  try {
    const application = await applicationService.createApplication({
      ...req.body,
      user_id: req.user.id,
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getApplications = async (req, res) => {
  try {
    const applications = await applicationService.getApplications(req.user.id);

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getApplicationById = async (req, res) => {
  try {
    const application = await applicationService.getApplicationById(
      req.params.id,
      req.user.id,
    );

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateApplication = async (req, res) => {
  try {
    const application = await applicationService.updateApplication(
      req.params.id,
      req.user.id,
      req.body,
    );

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const application = await applicationService.deleteApplication(
      req.params.id,
      req.user.id,
    );

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    res.status(200).json({
      message: "Application deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllApplications = async (req, res) => {
  try {
    const applications = await applicationService.getAllApplications();

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getApplicationsByStatus = async (req, res) => {
  try {
    const { status } = req.query;

    if (!status) {
      return res.status(400).json({
        message: "Status is required",
      });
    }

    const applications = await applicationService.getApplicationsByStatus(
      req.user.id,
      req.user.role,
      status,
    );

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// future enhancement
// const getApplications = async (req, res) => {
//   try {
//     let applications;

//     if (req.user.role === "admin") {
//       applications = await Application.find().populate(
//         "user_id",
//         "first_name last_name email role",
//       );
//     } else {
//       applications = await Application.find({
//         user_id: req.user.id,
//       });
//     }

//     res.status(200).json(applications);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

module.exports = {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  getAllApplications,
  getApplicationsByStatus,
};
