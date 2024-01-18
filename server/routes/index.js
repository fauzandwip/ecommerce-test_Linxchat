const ProductController = require('../controllers/ProductController');
const UserController = require('../controllers/UserController');

const router = require('express').Router();

router.get('/', (req, res) => res.send('LINXCHAT'));
router.post('/register', UserController.createUser);
router.post('/login', UserController.login);
router.get('/products', ProductController.getProducts);

module.exports = router;
