const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes,);
router.use('/api', apiRoutes);
router.use('/api', userRoutes);

module.exports = router;


