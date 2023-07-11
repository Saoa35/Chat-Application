const express = require("express");
const {
  createChat,
  findUserChats,
  findChat,
} = require("../controllers/chatController.js");

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findUserChats);
router.get("/find/:firsId/:secondId", findChat);

module.exports = router;
