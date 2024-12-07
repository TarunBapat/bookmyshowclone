import Movie from "../models/movieSchema.model.js";

const createMovie = async (req, res) => {
  const movie = req.body;
  const movieData = {
    ...movie,
  };
  try {
    const createdMovie = await Movie.create(movieData);
    console.log("movieDatamovieDatamovieData", createdMovie);
    return res.status(200).send({
      createdMovie,
    });
  } catch (error) {
    return res.status(401).send({ message: "error while creating movie" });
  }
};

const deleteMovie = async (req, res) => {
  try {
    console.log("req.params.id", req.params.id);
    await Movie.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: true });
  } catch (error) {
    return res.status(401).send({ message: "error while deleting movie" });
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    return res.status(200).send({ movie });
  } catch (error) {
    return res.status(401).send({ message: "error while updating movie" });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.find({ _id: req.params.id });
    return res.status(200).send({ movie });
  } catch (error) {
    return res.status(401).send({ message: "error while fetching movie" });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movie = await Movie.find();
    return res.status(200).send({ movie });
  } catch (error) {
    return res.status(401).send({ message: "error while fetching movie" });
  }
};

export { updateMovie, deleteMovie, createMovie, getMovieById, getAllMovies };
