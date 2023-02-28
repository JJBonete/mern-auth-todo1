// const { func } = require("joi");
const jwt = require("jsonwebtoken");
require("dotenv").config();
function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Not Authorized");

  try {
    const secretKey = process.env.SECRET_KEY;
    const payload = jwt.verify(token, secretKey);
    req.user = payload;
    next();
  } catch (error) {
    console.error(error);
    res.status(400).send("Invalid Token");
  }
}

module.exports = auth;
