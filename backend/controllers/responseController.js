var ResponseModel = require('../models/responseModel.js');

/**
 * responseController.js
 *
 * @description :: Server-side logic for managing responses.
 */
module.exports = {

    /**
     * responseController.list()
     */
    list: function (req, res) {
        ResponseModel.find(function (err, responses) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting response.',
                    error: err
                });
            }

            return res.json(responses);
        });
    },

    /**
     * responseController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ResponseModel.findOne({_id: id}, function (err, response) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting response.',
                    error: err
                });
            }

            if (!response) {
                return res.status(404).json({
                    message: 'No such response'
                });
            }

            return res.json(response);
        });
    },

    /**
     * responseController.create()
     */
    create: function (req, res) {
        var response = new ResponseModel({
			value : req.body.value,
			status : req.body.status,
            responseTime: req.body.responseTime,
            jobId: req.body.job,
            data: req.body.data
        });

        response.save(function (err, response) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating response',
                    error: err
                });
            }

            return res.status(201).json(response);
        });
    },

    /**
     * responseController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ResponseModel.findOne({_id: id}, function (err, response) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting response',
                    error: err
                });
            }

            if (!response) {
                return res.status(404).json({
                    message: 'No such response'
                });
            }

            response.value = req.body.value ? req.body.value : response.value;
			response.status = req.body.status ? req.body.status : response.status;
            response.responseTime = req.body.responseTime ? req.body.responseTime : response.responseTime;
            response.jobId = req.body.job ? req.body.job : response.job;
            response.data = req.body.data ? req.body.data : response.data;
			
            response.save(function (err, response) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating response.',
                        error: err
                    });
                }

                return res.json(response);
            });
        });
    },

    /**
     * responseController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ResponseModel.findByIdAndRemove(id, function (err, response) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the response.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
