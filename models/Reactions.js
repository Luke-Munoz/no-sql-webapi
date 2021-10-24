const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionsSchema = new Schema({
    // reactionId: {
    // },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    userName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
})


module.exports = ReactionsSchema;