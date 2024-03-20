const mongoose = require('mongoose');   
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
});

userSchema.pre('save', async function(next) {
    
        this.password = await bcrypt.hash(this.password, 12);
    });

const User = mongoose.model('User', userSchema);

module.exports = User;