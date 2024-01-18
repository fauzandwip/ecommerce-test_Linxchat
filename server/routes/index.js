const ProductController = require('../controllers/ProductController');

const router = require('express').Router();

router.get('/', (req, res) => res.send('LINXCHAT'));
router.get('/products', ProductController.getProducts);

module.exports = router;
