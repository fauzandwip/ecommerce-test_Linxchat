const InvoiceController = require('../controllers/InvoiceController');
const ProductController = require('../controllers/ProductController');
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');

const router = require('express').Router();

router.get('/', (req, res) => res.send('LINXCHAT'));
router.post('/register', UserController.createUser);
router.post('/login', UserController.login);
router.get('/products', ProductController.getProducts);

router.use(authentication);
router.post('/invoice', InvoiceController.createInvoice);

module.exports = router;
