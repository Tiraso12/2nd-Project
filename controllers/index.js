const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

router.use('/api', apiRoutes);
router.use('/api', htmlRoutes);



module.exports = router;