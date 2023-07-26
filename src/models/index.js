const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { generateToken } = require('../services');
const {REFRESH_EXPIRES_IN, REFRESH_SECRET} = require('../constants')


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    refresh_token: {
        type: String,
    }
});


// user is saved or updated
UserSchema.pre(
    'save', async function(next) {
    const user = this;
    updateUser(user, next);
});


//pre update for both findOneAndUpdate and findByIdAndUpdate
UserSchema.pre('findOneAndUpdate', async function(next) {
    const user = this;
    updateUser(user, next);
});

UserSchema.pre('findByIdAndUpdate', async function(next) {
    const user = this;
    updateUser(user, next);
});


const updateUser =async (user, next) => {
    const refresh_token = await generateToken({email: user.email}, REFRESH_SECRET, REFRESH_EXPIRES_IN);
    user.refresh_token = refresh_token;
    next();
}

const User = mongoose.model('User', UserSchema)


User.schema.methods.comparePassword = async function(password) {
    const user = this;
    console.log(user);
    return await bcrypt.compare(password, user.password);
}



module.exports = User;