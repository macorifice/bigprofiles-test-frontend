var express = require('express');
var router = express.Router();
var responseController = require('../controllers/responseController.js');

/*
 * GET
 */
router.get('/', responseController.list);

/*
 * GET
 */
router.get('/:id', responseController.show);

/*
 * POST
 */
router.post('/', responseController.create);

/*
 * PUT
 */
router.put('/:id', responseController.update);

/*
 * DELETE
 */
router.delete('/:id', responseController.remove);

module.exports = router;
