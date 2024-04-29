const productContoller = require('../controllers/productController.js');

const router = require('express').Router()

router.post('/addProduct', productContoller.addProduct)
router.get('/allProducts', productContoller.getAllProducts)
router.get('/published', productContoller.getPublishedProduct)

router.get('/editProduct/:id',productContoller.getOneProduct)
router.put('/updateProduct/:id',productContoller.updateProduct)
router.delete('/deleteProduct/:id',productContoller.deleteProduct)


module.exports = router
