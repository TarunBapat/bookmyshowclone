const isAdmin = async (req, res, next) => {
  try {
    const admin = req.user.isAdmin;
    console.log(" req.user", req.user, " req.user.admin", req.user.isAdmin);
    if (admin) {
      next();
    } else {
      throw new Error("you don't have permission");
    }
  } catch (error) {
    res.status(403).send({ message: error.message, success: false });
  }
};

export default isAdmin;
