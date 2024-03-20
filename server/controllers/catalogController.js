const router = require('express').Router();
const catalogService = require('../services/catalogService');

router.get('/', async (req, res) => {
    
    const catalog = await catalogService.getAll()
    res.json(catalog);
});
    
router.get('/:id', async (req, res) => {
    
    const catalog = await catalogService.getOne(req.params.id)
    res.json(catalog);
    });

    router.put('/:id', async (req, res) => {
    
        const catalog = await catalogService.edit(req.params.id, req.body)
        res.json(catalog);
        });

        router.delete('/:id', async (req, res) => {
    
            await catalogService.delete(req.params.id, req.body)
            res.json({ok: true});
            });

router.post('/', async (req, res) => {
    
    const catalog = await catalogService.create({ ...req.body , owner: req.user.userId })
    res.json(catalog);
    });

module.exports = router;