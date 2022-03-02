const router = require('express').Router();
const commentRoutes = require('./comment-route');
const pizzaRoutes = require('./pizza-routes');

// * prefix of `/pizza` to routes created in `pizza-routes.js`
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);


module.exports = router;