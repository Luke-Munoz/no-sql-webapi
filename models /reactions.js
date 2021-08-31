const { Schema, model } = require('mongoose');
const { Reaction } = require('.');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
    reactionId: {

    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },

    userName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: DataCue,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
})
const Reaction = model('Reaction', reactionSchema);
module.exports = Reaction