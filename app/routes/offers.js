var offerController = require('./../controllers/offers')
module.exports = router => {
  /* GET users listing. */
  router.get('/get', function (req, res) {
    return offerController.getOffers()
      .then(response => {
        res.status(200).json({
            offers: response
        });
      }).catch(err => {
          console.log(err);
        res.status(500).json({ error: 'Error occured' });
      })
  })

  return router;
};