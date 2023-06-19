const router = require('express').Router();
const { getItem, getItems, addItem, updateItem, deleteItem } = require('../controllers/itemsController');



// CREATING ROUTE FOR ITEMS
router.route('/').get(getItems).post(addItem)
router.route('/:id').get(getItem).put(updateItem).delete(deleteItem)



// EXPORTING OUR ROUTES 
module.exports = router;