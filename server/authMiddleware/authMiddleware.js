const jwt = require('jsonwebtoken');

const secret = require('../config/configJWT');

exports.authMiddleware = (req, res, next) => {
    const token = req.headers['X-Authorization'];

    if (!token) {
        return res.status(401).json({ message: 'You are not authorized!' });
    }
    try {
        const decoded = jwt.verify(token, secret.jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'You are not authorized!' });
    };
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'You are not authorized!' });
    }
    next();
}
