const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Restaurants = Schema({
  name: String,
  address: String,
  menus: [{ type: Schema.Types.ObjectId, ref: 'Menus' }]
}, {
 timestamp: true 
});

const Menus = Schema({
  menuName: String,
  type: String
}, {
 timestamp: true 
});

module.exports = mongoose.model('Menus', Menus);

module.exports = mongoose.model('Restaurants', Restaurants);