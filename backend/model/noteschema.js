const mongoose = require('mongoose')

const noteData = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})



module.exports = mongoose.model("Note",noteData)