const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reasctionsSchema = require('./reactions')
const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    userName: {
        type: String,
        required: true
    },
    reactions: [reasctionsSchema],

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
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

const Thought = model('Thought', ThoughtsSchema);

module.exports = Thought;