const JWT_SECRET = process.env.JWT_SECRET;
var jwt = require("jsonwebtoken");

const fetchdata = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(405).send({ error: "token invalid" });
  }
};

module.exports = fetchdata;
