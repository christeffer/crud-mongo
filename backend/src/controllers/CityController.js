const axios = require('axios');
const City = require('../models/City');

module.exports = {
  async index(req, res) {
    const city = await City.find().populate('state');

    return res.json(city);
  },
  async store(req, res) {
    const { name, state } = req.body;

    let city = await City.findOne({ name });

    if (city) {
      res.status(400).json({ success: false, message: 'Cidade já cadastrado' });
    }
    try {
      city = await City.create({
        name,
        state,
      });
    } catch (error) {
      return res.status(400).json(error);
    }

    return res.status(201).json(city);
  },

  async update(req, res) {
    const updatedCity = await City.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        state: req.body.state,
      },
      function (err, city) {
        if (err) {
          return res.status(500).json({ success: false, message: err.message });
        }

        if (!city) {
          return res
            .status(400)
            .json({ success: false, message: 'Cidade não encontrado' });
        }
      }
    );
    res.json(updatedCity);
  },

  async destroy(req, res) {
    City.findOneAndRemove({ _id: req.params.id }, function (err, city) {
      if (err) {
        return res.status(500).json({ success: false, message: err.message });
      }

      if (!city) {
        return res
          .status(400)
          .json({ success: false, message: 'Cidade não encontrado' });
      }

      res.json({ success: true, message: 'Cidade removida' });
    });
  },
};
