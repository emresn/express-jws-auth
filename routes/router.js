const express = require("express");
const authController = require('../controllers/authController')
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

const route = express.Router();



route.get('*', checkUser );
route.get('/', (req, res) => res.render('home'));
route.get('/dashboard',requireAuth, (req, res) => res.render('dashboard'));
route.get('/contact', (req, res) => res.render('contact'));

route.get('/signup', authController.signup_get);
route.post('/signup', authController.signup_post);

route.get('/login', authController.login_get);
route.post('/login', authController.login_post);

route.get('/logout', authController.logout_get);





module.exports = route;