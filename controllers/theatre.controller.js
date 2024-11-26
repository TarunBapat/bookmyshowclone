import Theatre from "../models/theatreSchema.model.js";

export const createTheatre = async (req, res) => {
  const theatre = req.body;
  const user = req.user;
  const theatreData = {
    ...theatre,
    owner: user.id,
  };
  console.log("theatreData", theatreData);
  try {
    const createdTheatre = await Theatre.create(theatreData);
    return res.status(200).send({
      createdTheatre,
    });
  } catch (error) {
    return res.status(401).send({ message: "error while creating theatre" });
  }
};
