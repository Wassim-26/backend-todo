import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const data = jwt.verify(token, "super-secret-key");
    req.userId = data.id;
    next();
  } catch (error) {
    res.send({ message: "You are not authorized" });
  }
};
