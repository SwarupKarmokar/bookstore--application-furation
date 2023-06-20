const router = require('express').Router();
const { registerUser, loginUser, currentUser } = require('../controllers/usersController');
const validateToken = require('../middleware/validateToken');


// USER ROUTES 
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/current').get(validateToken, currentUser)

module.exports = router;