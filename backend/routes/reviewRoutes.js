const express = require('express');
const { addReview, getReviewsByMovieId, updateReview, deleteReview } = require('../controllers/reviewController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/reviews/:movieId', authenticateToken, addReview);
router.get('/reviews/:movieId', getReviewsByMovieId);
router.put('/reviews/:reviewId', authenticateToken, updateReview);
router.delete('/reviews/:reviewId', authenticateToken, deleteReview);

module.exports = router;
