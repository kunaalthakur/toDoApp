const mongoose = require('mongoose');
const { type } = require('os');

const tasksModel = new mongoose.Schema(
    {
        taskName:{
            type:String,
            required:true
        },
        taskDes:{
            type:String,
            required:true
        },
        taskStatus:{
            type:String,
            required:true
        },
        taskPriority:{
            type:String,
            required:true
        },
        dueDate:{
            type:String,
            required:true
        }       
    }
)

const tasks = mongoose.model('tasks',tasksModel);
module.exports = task