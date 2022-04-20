
const router = require('express').Router();

const lettersController = require('../controllers/letters.controller.js');

router.post('/add-letters', lettersController.addLetters);
router.get('/get-all-letters', lettersController.getAllLetters);
router.get('/get-one-letters', lettersController.getOneLetters);

module.exports = router;
