import Theatre from "../models/theatreSchema.model.js";

const createTheatre = async (req, res) => {
  const theatre = req.body;
  const user = req.user;
  const theatreData = {
    ...theatre,
    owner: user.id,
  };
  try {
    const createdTheatre = await Theatre.create(theatreData);
    return res.status(200).send({
      createdTheatre,
    });
  } catch (error) {
    return res.status(401).send({ message: "error while creating theatre" });
  }
};

const deleteTheatre = async (req, res) => {
  try {
    console.log("req.params.id", req.params.id);
    await Theatre.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: true });
  } catch (error) {
    return res.status(401).send({ message: "error while deleting theatre" });
  }
};

const updateTheatre = async (req, res) => {
  // console.log("req param from update", req);
  try {
    const theatre = await Theatre.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    return res.status(200).send({ theatre });
  } catch (error) {
    return res.status(401).send({ message: "error while updating theatre" });
  }
};

const getTheatreById = async (req, res) => {
  try {
    const theatre = await Theatre.find({ _id: req.params.id });
    return res.status(200).send({ theatre });
  } catch (error) {
    return res.status(401).send({ message: "error while fetching theatre" });
  }
};

export { updateTheatre, deleteTheatre, createTheatre, getTheatreById };
