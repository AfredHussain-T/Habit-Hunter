const express= require('express');
const router = express.Router();
const homeCont = require('../controllers/homeController');

router.get('/' , homeCont.homeView);
router.use('/habit' , require('./habitroutes'))

module.exports = router;