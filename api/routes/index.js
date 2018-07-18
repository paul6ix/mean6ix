var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');
var reviewHotels = require('../controllers/reviews.contollers.js');

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll)
    .post(ctrlHotels.hotelsAddOne);


router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);
//reviews router
router
    .route('/hotels/:hotelId/reviews')
    .get(reviewHotels.reviewsGetAll);
router
    .route('/hotels/:hotelId/reviews/:reviewId')
    .get(reviewHotels.reviewsGetOne);

module.exports = router;