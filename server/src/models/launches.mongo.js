const mongoose = require('mongoose');

const launchSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required:true
    },
    mission: {
        type: String,
        required:true
    },
    launchDate: {
        type: Date,
        required:true
    },
    rocket: {
        type: String,
        required:true
    },
    target: {
      type: String,
        required:true
    },
    customers: {
        type: [String],
        required:true
    },
    upcoming: {
        type: Boolean,
        required: true,
        
    },
    sucess: {
        type: Boolean,
        required: true,
        default:true
    }
})


module.exports = mongoose.model('launch', launchSchema);