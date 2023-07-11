const messageModel = require("../models/messageModel.js");

const createMessage = async () => {
  const { chatId, senderId, text } = req.body;

  const message = new messageModel({
    chatId,
    senderId,
    text,
  });

  try {
    const responce = await message.save();
    responce.status(200).json(responce);
  } catch (error) {
    console.log(error);
    resizeBy.status(500).json(error);
  }
};

const getMessages = async (req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await messageModel.find({ chatId });
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    resizeBy.status(500).json(error);
  }
};

module.exports = { createMessage, getMessages };
