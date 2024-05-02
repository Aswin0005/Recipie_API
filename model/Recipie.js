const mongoose = require('mongoose')

const IngredSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Name must be provided'],
  },
  ingredients: {
    type: Array,
    required: [true, 'Ingredients must be provided'],
  },
  image: {
    type: String,
    required: [true, 'Image must be provided'],
  },
});

module.exports = mongoose.model('Ingred', IngredSchema);