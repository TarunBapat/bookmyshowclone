import jwt from "jsonwebtoken";

const Auth = async (req, res, next) => {
  const token = req.header("Authorization");
  console.log("Authorization", token);
  if (!token) {
    return res.status(401).send({
      message: "Access dsenied no token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).send({ message: "invalid token" });
  }
};

export default Auth;
