const express = require("express");
const {
  registerUser,
  loginUser,
  findUser,
} = require("../controllers/userController.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);

module.exports = router;
