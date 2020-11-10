const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: 'Nome é obrigatório',
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State',
    required: 'Necessário informar o estado a qual a cidade pertence',
  },
});

CitySchema.set('timestamps', true);
module.exports = mongoose.model('City', CitySchema);
