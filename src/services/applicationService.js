const Application = require('../models/Application');

export const createApplication = async(applicationData) => {
    return await Application.create(applicationData);
} 

export const getApplications = async(userId) => {
    return await Application.find({user_id: userId});
}

export const getApplicationById = async(applicationId) => {
    return await Application.findOne({_id: applicationId});
}

export const updateApplication = async(id, userId, applicationData) => {
    return await Application.findOneAndUpdate({
        _id: id,
        user_id: userId
    },
    applicatrionData, {
        new: true
    }    
);
}

export const deleteApplication = async(id, userId) => {
    return await Application.findOneAndDelete({
        _id: id,
        user_id: userId
    });
}