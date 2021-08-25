const { Schema, model } = require('mongoose');

const User = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    userName: {
        type: String,
        required: true
    },
    reaction: {

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


UserSchema.virtual('reactionCount').get(function() {
    return this.friends[0];
})