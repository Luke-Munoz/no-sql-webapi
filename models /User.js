const { Schema, model } = require('mongoose');

const User = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'User name is required',
        unique: true
    },

    email: {
        type: String,
        trim: true,
        required: 'Email is Required',
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: {

    },
    friends: {

    },

    createdAt: {
        type: Date,
        default: Date.now
    }

}, {
    toJSON: {
        virtuals: true,
    },
    id: false
}, );


UserSchema.virtual('friendcount').get(function() {
    return this.friends[0];
})