const { handleSaveContactMe } = require('../controllers/contactMe');

const router = require('express').Router();

router.post('/contact-save', handleSaveContactMe);


module.exports = router;