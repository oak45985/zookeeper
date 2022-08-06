const router = require('express').Router();
const animalRoutes = require('../apiroutes/animalRoutes');
const zookeeperRoutes = require('../apiroutes/zookeeperRoutes');

router.use(animalRoutes);
router.use(zookeeperRoutes);

module.exports = router;