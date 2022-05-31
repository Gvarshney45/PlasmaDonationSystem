const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.cookies.jwtoken;
  if (!token) return res.status(401).send("Access Denied");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
  }
}
module.exports = auth;
