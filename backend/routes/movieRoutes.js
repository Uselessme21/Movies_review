const express = require('express');
const { getAllMovies, getMovieById, createMovie } = require('../controllers/movieController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router(); 
// extra to create movie
router.post('/movies',authenticateToken, createMovie); 

router.get('/movies', getAllMovies);

router.get('/movies/:id', getMovieById);

module.exports = router;
