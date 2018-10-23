var customerController = require('./../controllers/customers')
module.exports = router => {
  /* GET users listing. */
  router.get('/get', function (req, res) {
    return customerController.getCustomers()
      .then(response => {
        res.status(200).json({
            customers: response
        });
      }).catch(err => {
          console.log(err);
        res.status(500).json({ error: 'Error occured' });
      })
  })

  return router;
};