import Show from "../models/showSchema.model.js";

const createShow = async (req, res) => {
  const show = req.body;
  const user = req.user;
  const showData = {
    ...show,
    owner: user.id,
  };
  try {
    const createdShow = await Show.create(showData);
    return res.status(200).send({
      createdShow,
    });
  } catch (error) {
    return res.status(401).send({ message: "error while creating show" });
  }
};

const deleteShow = async (req, res) => {
  try {
    console.log("req.params.id", req.params.id);
    await Show.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: true });
  } catch (error) {
    return res.status(401).send({ message: "error while deleting show" });
  }
};

const updateShow = async (req, res) => {
  // console.log("req param from update", req);
  try {
    const show = await Show.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    return res.status(200).send({ show });
  } catch (error) {
    return res.status(401).send({ message: "error while updating show" });
  }
};

const getShowById = async (req, res) => {
  try {
    const show = await Show.find({ _id: req.params.id }).populate([
      "theatre",
      "movie",
    ]);
    return res.status(200).send({ show });
  } catch (error) {
    return res.status(401).send({ message: "error while fetching show" });
  }
};

const getShowByFilter = async (req, res) => {
  try {
    const { movie, theatre, date } = req.query;
    console.log("movie, theatre, date", movie, theatre, date);
    const filter = {};
    if (movie) {
      filter.movie = movie;
    }
    if (theatre) {
      filter.theatre = theatre;
    }
    if (date) {
      filter.date = date;
    }

    const movieData = await Show.find(filter).populate(["theatre"]);
    console.log("movieDatamovieDatamovieDatamovieData", movieData);
    res.status(200).send({ movieData: movieData });
  } catch (error) {}
};
export { updateShow, deleteShow, createShow, getShowById, getShowByFilter };
