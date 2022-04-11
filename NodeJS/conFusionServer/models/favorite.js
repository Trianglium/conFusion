const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

// User's List of Favorite Dishes
const favoriteSchema new Schema({
  dishes:  [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dishes'
  }],
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }
}, {
    timestamps: true
});

var Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;
