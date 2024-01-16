const router = require('express').Router();

router.get('/', (req, res) => res.send('LINXCHAT'));
router.get('/products', (req, res) => res.send('PRODUCTS'));

module.exports = router;
