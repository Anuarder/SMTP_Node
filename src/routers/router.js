const router = require('express').Router();
const smtpController = require('../controllers/smtp');

router.post('/sendMessage', smtpController.sendMessage);
router.post('/sendPhone', smtpController.sendPhone);

module.exports = router;