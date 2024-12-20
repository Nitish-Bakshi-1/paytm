const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer")) {
    res.json({
      msg: "invalid token",
    });
  }
  const mainToken = token.split(" ")[1];
  try {
    const verification = jwt.verify(mainToken, JWT_SECRET);

    if (!verification) {
      res.json({
        msg: "authorization failed",
      });
    }
    if (verification.userId) {
      req.userId = verification.userId;
      next();
    }
  } catch (e) {
    console.log(error);
  }
};
module.exports = authMiddleware;
