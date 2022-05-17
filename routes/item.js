const router = require('express').Router();
const Item = require('../models/item.model');
// let Item = require('../models/item.model');

router.route('/').get((req,res) => {
    Item.find()
        .then(Item => res.json(Item))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/add').post((req,res) => {
    const itemId = req.body.itemId;
    const name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;
    const description = req.body.description;    

    const newItem = new Item({
        itemId,
        name,
        category,
        price,
        description       
    });
    newItem.save()
        .then(() => res.json('New Item added!'))
        .catch(err => res.status(400).json('Error : ' +err));
});
router.route('/:id').get((req,res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/:id').delete((req,res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted'))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/update/:id').post((req,res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.itemId = req.body.itemId;
            item.name = req.body.name;
            item.category = req.body.category;
            item.price = req.body.price;
            item.description = req.body.description;

            item.save()
                .then(() => res.json('Item updated'))
                .catch(err => res.status(400).json('Error : ' +err));
        })

        .catch(err => res.status(400).json('Error : ' +err));
});
module.exports = router;

