const router = require('express').Router();
const tags = require('./api.tags');

router.use('/tags', tags);

module.exports = router;