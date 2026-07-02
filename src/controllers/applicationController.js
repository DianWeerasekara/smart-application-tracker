const applicationService = require('../services/applicationService');

export const createApplication = async(req, res) => {
    try {
        const application = await applicationService.createApplication({
            ...req.body,
            user_id: req.user.id
        })
        res.status(201).json(application)
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getApplications = async(req, res) => {
    try {
        const applications = await applicationService.getApplications(req.user.id);
        res.status(200).json(applications);
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getApplicationById = async(req, res) => {
    try {
        const applicationById = await applicationService.getApplicationById(
            req.params.id,
            req.user.id
        )

        if(!applicationById) {
            return res.status(404).json({
                message: "Application not found"
            })
        }

        res.status(200).json(applicationById);

    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateApplication = async(req, res) => {
    try {
        const updateApplication = await applicationService.updateApplication(
            req.params.id,
            req.user.id,
            req.body
        )

        if(!updateApplication) {
            return res.status(404).json({
                message: "Application not found"
            })
        }

        res.status(200).json(updateApplication);
    } catch (error) { 
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteApplication = async(req, res) => {
    try {
        const deleteApplication = await applicationService.deleteApplication(
            req.params.id,
            req.user.id
        )

        if(!deleteApplication) {
            return res.status(404).json({
                message: "Application not found"
            })
        }

        res.status(200).json({
            message: 'Application deleted successfully'
        })
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}