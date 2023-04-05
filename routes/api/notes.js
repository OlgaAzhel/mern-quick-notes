const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, notesCtrl.create);
router.post('/show', ensureLoggedIn, notesCtrl.show);
router.post('/delete', ensureLoggedIn, notesCtrl.delete);

module.exports = router;