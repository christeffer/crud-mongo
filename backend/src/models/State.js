const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Nome é obrigatório',
  },
  abbreviation: {
    type: String,
    required: 'Abreviação é obrigatório',
  },
});
StateSchema.set('timestamps', true);
module.exports = mongoose.model('State', StateSchema);
