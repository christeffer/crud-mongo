const axios = require('axios');
const State = require('../models/State');

module.exports = {
  async index(req, res) {
    const filter = Object.assign(
      {},
      ...Object.keys(req.body).map((objKey) => {
        return { [objKey]: req.body[objKey] };
      })
    );
    let orderBy = '';
    if (req.query['order'] && req.query['sortBy']) {
      const order = req.query['order'] ? req.query['order'] : '';
      const sort = req.query['sortBy'] ? req.query['sortBy'] : '';
      orderBy = { [sort]: order };
    }
    const state = await State.find(filter).sort(orderBy);
    return res.json(state);
  },
  async store(req, res) {
    const { name, abbreviation } = req.body;

    let state = await State.findOne({ name });

    if (state) {
      res.status(400).json({ success: false, message: 'Estado já cadastrado' });
    }
    try {
      state = await State.create({
        name,
        abbreviation,
      });
    } catch (error) {
      return res.status(400).json(error);
    }

    return res.status(201).json(state);
  },

  async update(req, res) {
    const updatedState = await State.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        abbreviation: req.body.abbreviation,
      },
      function (err, state) {
        if (err) {
          return res.status(500).json({ success: false, message: err.message });
        }

        if (!state) {
          return res
            .status(400)
            .json({ success: false, message: 'Estado não encontrado' });
        }
      }
    );
    res.json(updatedState);
  },

  async destroy(req, res) {
    State.findOneAndRemove({ _id: req.params.id }, function (err, state) {
      if (err) {
        return res.status(500).json({ success: false, message: err.message });
      }

      if (!state) {
        return res
          .status(400)
          .json({ success: false, message: 'Estado não encontrado' });
      }

      res.json({ success: true, message: 'Estado removido' });
    });
  },
};
