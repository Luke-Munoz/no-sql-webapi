const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionsSchema = require('./Reactions');
const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxLength: 280
    },
    userName: {
        type: String,
        required: true
    },
    reactions: [ReactionsSchema],

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }

}, {
    toJSON: {
        virtual: true,
    },
    id: false
}, );


ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.friends[0];
})

const Thought = model('Thought', ThoughtsSchema);
module.exports = Thought;