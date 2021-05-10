var JobModel = require('../models/jobModel.js');
var ResponseModel = require('../models/responseModel.js');
const getRandomValue = require('../utils/getRandomValue');

/**
 * jobController.js
 *
 * @description :: Server-side logic for managing jobs.
 */
module.exports = {

    /**
     * jobController.list()
     */
    list: function (req, res) {
        JobModel.find(function (err, jobs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting job.',
                    error: err
                });
            }

            return res.json(jobs);
        });
    },

    /**
     * jobController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        JobModel.findOne({_id: id}, function (err, job) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting job.',
                    error: err
                });
            }

            if (!job) {
                return res.status(404).json({
                    message: 'No such job'
                });
            }

            return res.json(job);
        });
    },

    /**
     * jobController.create()
     */
    create: function (req, res) {
        var job = new JobModel({
			job : req.body.job,
			data : req.body.data
        });

        const randomValue = Math.floor(Math.random() * 11);
        const randomError = Math.random() < 0.1; //10% probability of getting true

        const minResponseTime = 10;
        const maxResponseTime = 100;
        const randomResponseTime = getRandomValue(
          minResponseTime,
          maxResponseTime
        );

        job.save(function (err, job) {
          if (err) {
            return res.status(500).json({
              message: 'Error when creating job',
              error: err,
            });
          }

          setTimeout(() => {

            ResponseModel.create({
                jobId: req.body.job,
                data: req.body.data,
                value: randomError ? '' : randomValue,
                status: randomError ? 'failed' : 'OK',
                responseTime: randomResponseTime
            })

            return res.status(randomError ? 500 : 201).json({
                value: randomError ? '' : randomValue,
                status: randomError ? 'failed' : 'OK',
              });   
          }, randomResponseTime);

        });
    },

    /**
     * jobController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        JobModel.findOne({_id: id}, function (err, job) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting job',
                    error: err
                });
            }

            if (!job) {
                return res.status(404).json({
                    message: 'No such job'
                });
            }

            job.job = req.body.job ? req.body.job : job.job;
			job.data = req.body.data ? req.body.data : job.data;
			
            job.save(function (err, job) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating job.',
                        error: err
                    });
                }

                return res.json(job);
            });
        });
    },

    /**
     * jobController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        JobModel.findByIdAndRemove(id, function (err, job) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the job.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
