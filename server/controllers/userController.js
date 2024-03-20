const router = require('express').Router();

const userService = require('../services/userService');

router.post('/register', async (req, res) => {

    const result = await userService.register(req.body)

    res.json(result);
});

router.post('/login', async (req, res) => {

    const result = await userService.login(req.body)

    res.json(result);
});
router.get('/logout', async (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out!' });
});

module.exports = router;
