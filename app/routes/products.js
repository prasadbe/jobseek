var productController = require('./../controllers/products')
module.exports = router => {
  /* GET users listing. */
  router.get('/get', function (req, res) {
    return productController.getProducts()
      .then(response => {
        res.status(200).json({
            products: response
        });
      }).catch(err => {
          console.log(err);
        res.status(500).json({ error: 'Error occured' });
      })
  })

  return router;
};