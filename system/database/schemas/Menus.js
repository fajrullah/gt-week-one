const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Menus = Schema({
  menuName: String,
  type: String
}, {
 timestamp: true 
});

module.exports = mongoose.model('Menus', Menus);