const router = require('express').Router();
const smtpController = require('../controllers/smtp');

router.get('/', smtpController.sayHello);
router.post('/sendMessage', smtpController.sendMessage);
router.post('/sendPhone', smtpController.sendPhone);

module.exports = router;