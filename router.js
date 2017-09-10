const Authentication = require('./controllers/authentication');
const Homepage = require('./controllers/homepage');
const Product = require('./controllers/product');
const Cart = require('./controllers/cart');
const Checkout = require('./controllers/checkout');
const Category = require('./controllers/category');
const Blog = require('./controllers/blog');
const User = require('./controllers/user');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false} );
const requireSignin = passport.authenticate('local', { session: false} );

module.exports = function (app) {
  
  app.get('/', Homepage.home);
  app.get('/blog', Blog.list);
  app.get('/post', Blog.post);
  app.get('/product', Product.detail);
  app.get('/cart', Cart.cart);
  app.get('/checkout1', Checkout.checkout1);
  app.get('/checkout2', Checkout.checkout2);
  app.get('/checkout3', Checkout.checkout3);
  app.get('/checkout4', Checkout.checkout4);
  app.get('/login', User.login);
  app.get('/category', Category.category);
  
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  
}
