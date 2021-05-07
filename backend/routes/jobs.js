var express = require('express');
var router = express.Router();
var jobController = require('../controllers/jobController.js');

/*
 * GET
 */
router.get('/', jobController.list);

/*
 * GET
 */
router.get('/:id', jobController.show);

/*
 * POST
 */
router.post('/', jobController.create);

/*
 * PUT
 */
router.put('/:id', jobController.update);

/*
 * DELETE
 */
router.delete('/:id', jobController.remove);

module.exports = router;
