const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
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
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],

    createdAt: {
        type: Date,
        default: Date.now
    }

}, {
    toJSON: {
        virtual: true,
    },
    id: false
}, );


UserSchema.virtual('friendcount').get(function() {
    return this.friends.length;
})

const User = model('User', UserSchema);
module.exports = User;