const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err || decoded.role !== "admin") return res.sendStatus(403);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { protect };
