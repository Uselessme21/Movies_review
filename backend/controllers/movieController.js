const Movie = require('../models/movie');


const createMovie =async(req,res)=>{
  try {
    const { title, genre, releaseYear} = req.body;
    const MovieExists = await Movie.findOne({ title });

    if (MovieExists) {
      return res.status(204).json({ message: 'Movie already exists' });
    }
   
    const movie = await Movie.create({
     title,
      genre,
      releaseYear
    });

   
    res.status(200).json({ message:"movie created successfully ", movie});
  } catch (error) {
    res.status(500).send(error.message);
  }
}


const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found.' });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {createMovie, getAllMovies, getMovieById };
