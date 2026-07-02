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

module.exports = {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
};
