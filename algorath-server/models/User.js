const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id:{
        type:Number,
        required: true

    },
    name: {
        type:String,
        required: true
    },
    connections: {          
        type: [Number],
        required: true,
        default: []
    }
});

module.exports = mongoose.model('user', UserSchema);