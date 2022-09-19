const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const homepageRoutes = require('./htmlRoutes/homepage-routes');

router.use('/api', apiRoutes);
router.use('/home', homepageRoutes);

module.exports = router;