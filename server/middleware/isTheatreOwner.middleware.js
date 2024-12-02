import Theatre from "../models/theatreSchema.model.js";

const isTheatreOwner = async (req, res, next) => {
  try {
    const checkTheatreDetails = await Theatre.findById(req.body.theatre);
    if (checkTheatreDetails.owner.toString() !== req.user.id) {
      throw new Error(`You aren't the owner of ${theatreDetails.name}`);
    }
    next();
  } catch (error) {
    res.status(403).send({
      success: false,
      message: e.message,
    });
  }
};

export default isTheatreOwner;
