// backend/routes/chatRoutes.js
const express = require('express');
const { saveChat, getChats } = require('../controllers/chatController');
const router = express.Router();

// Route for saving chat
router.post('/save-chat', saveChat);

// Route for fetching chats
router.get('/get-chats', getChats);

module.exports = router;
