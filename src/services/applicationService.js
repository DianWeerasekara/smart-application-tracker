const Application = require("../models/Application");

const createApplication = async (applicationData) => {
  return await Application.create(applicationData);
};

const getApplications = async (userId) => {
  return await Application.find({ user_id: userId });
};

const getApplicationById = async (id, userId) => {
  return await Application.findOne({
    _id: id,
    user_id: userId,
  });
};

const updateApplication = async (id, userId, data) => {
  return await Application.findOneAndUpdate(
    {
      _id: id,
      user_id: userId,
    },
    data,
    { new: true },
  );
};

const deleteApplication = async (id, userId) => {
  return await Application.findOneAndDelete({
    _id: id,
    user_id: userId,
  });
};

const getAllApplications = async() => {
    return await Application.find()
        .populate("user_id", "first_name last_name email")
        .sort({ createdAt: -1});
}

const getApplicationsByStatus = async (userId, role, status) => {
  if (role === "admin") {
    return await Application.find({ status })
      .populate("user_id", "first_name last_name email")
      .sort({ createdAt: -1 });
  }

  return await Application.find({
    user_id: userId,
    status,
  }).sort({ createdAt: -1 });
};

module.exports = {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  getAllApplications,
  getApplicationsByStatus
};
