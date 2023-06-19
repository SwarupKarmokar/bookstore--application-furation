const asyncHandler = require('express-async-handler');


// @DESC: GETTING ALL ITEMS 
// @ROUTE: GET /api/items 
// @ACCESS: PUBLIC 

const getItems = asyncHandler(async (req, res) => {
    res.json("HI this is all items page")
})


// @DESC: GETTING INDIVIDUAL ITEMS 
// @ROUTE: GET /api/items/:id
// @ACCESS: PUBLIC 

const getItem = asyncHandler(async (req, res) => {
    res.json("HI this is all individual item page")
})


// @DESC: POSTING ITEM 
// @ROUTE: POST /api/items 
// @ACCESS: PUBLIC 

const addItem = asyncHandler(async (req, res) => {
    res.json("HI this is adding item page")
})


// @DESC: UPDATING ITEM 
// @ROUTE: PUT /api/items:id
// @ACCESS: PUBLIC 

const updateItem = asyncHandler(async (req, res) => {
    res.json("HI this is updating items page")
})


// @DESC: DELETE ITEM 
// @ROUTE: DELETE /api/items/:id 
// @ACCESS: PUBLIC 

const deleteItem = asyncHandler(async (req, res) => {
    res.json("HI this is deleting items page")
})


module.exports = { getItem, getItems, addItem, updateItem, deleteItem }