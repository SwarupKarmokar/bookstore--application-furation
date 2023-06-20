const asyncHandler = require('express-async-handler');
const Item = require('../models/itemsSchema')


// @DESC: GETTING ALL ITEMS 
// @ROUTE: GET /api/items 
// @ACCESS: PRIVATE 

const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find({ user_id: req.user.id });
    res.status(200).json(items)
})


// @DESC: GETTING INDIVIDUAL ITEMS 
// @ROUTE: GET /api/items/:id
// @ACCESS: PRIVATE 

const getItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) {
        res.status(404);
        throw new Error("Item not found")
    }

    res.status(200).json(item)
})


// @DESC: POSTING ITEM 
// @ROUTE: POST /api/items 
// @ACCESS: PRIVATE 

const addItem = asyncHandler(async (req, res) => {
    const { item } = req.body;

    if (!item) {
        res.status(400);
        throw new Error("Please add item")
    }

    const items = await Item.create({ item });

    res.status(200).json(items)
})


// @DESC: UPDATING ITEM 
// @ROUTE: PUT /api/items:id
// @ACCESS: PRIVATE 

const updateItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) {
        res.status(404);
        throw new Error("Item not found")
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedItem)
})


// @DESC: DELETE ITEM 
// @ROUTE: DELETE /api/items/:id 
// @ACCESS: PRIVATE 

const deleteItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) {
        res.status(404);
        throw new Error("Item not found")
    }

    await Item.deleteOne({ _id: req.params.id })

    res.status(200).json("Deleted Successfully")
})


module.exports = { getItem, getItems, addItem, updateItem, deleteItem }