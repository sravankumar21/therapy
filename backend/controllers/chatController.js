// backend/controllers/chatController.js
const Chat = require('../models/Chat');

// Save chat messages to the database
exports.saveChat = async (req, res) => {
  try {
    const chat = new Chat({ messages: req.body.messages });
    await chat.save();
    res.status(201).json({ message: 'Chat saved successfully!', chat });
  } catch (error) {
    console.error('Error saving chat:', error);
    res.status(500).json({ message: 'Error saving chat', error });
  }
};

// Fetch all chats from the database
exports.getChats = async (req, res) => {
  try {
    const chats = await Chat.find().sort({ createdAt: -1 }); // Sort by latest first
    res.status(200).json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error);
    res.status(500).json({ message: 'Error fetching chats', error });
  }
};
