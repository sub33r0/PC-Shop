const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = require('../config/configJWT')

exports.register = async (userData) => {
    if (userData.password !== userData.rePass) {
        throw new Error('Passwords do not match!');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const user = await User.create({ email: userData.email, password: hashedPassword });

    const token = generateAccessToken(user);

    return {
        userId: user._id,
        email: user.email,
        token,
    };
};

exports.login = async (userData) => {
    const user = await User.findOne({ email: userData.email });

    if (!user) {
        throw new Error('No such user!');
    }

    const isMatch = await bcrypt.compare(userData.password, user.password);

    if (!isMatch) {
        throw new Error('Invalid password!');
    }

    const token = generateAccessToken(user);

    return {
        userId: user._id,
        email: user.email,
        token,
    };
};

function generateAccessToken(user) {
    return jwt.sign({
        userId: user._id,
        email: user.email,
    }, secret.jwtSecret, { expiresIn: '1h' }); 
}

