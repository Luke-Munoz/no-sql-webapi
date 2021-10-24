const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionsSchema = require('./Reactions');

const thoughtSchema = new Schema({
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
        getters: true,
    },
    id: false
}, );
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;