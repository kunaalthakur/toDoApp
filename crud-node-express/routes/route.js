const express = require('express')

const taskController = require('../controllers/taskController')

const router = express.Router();

router.get('/addTask',taskController.addTask);

module.exports=router