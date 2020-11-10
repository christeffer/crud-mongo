const axios = require('axios');
const City = require('../models/City');

module.exports = {
  async index(req, res) {
    const fields = ['cityName', 'stateName', 'abbreviation'];
    let fieldsLength = fields.length;
    const filter = Object.assign(
      {},
      ...Object.keys(req.query).map((objKey) => {
        let max = fieldsLength;
        while (max >= 0) {
          console.log('field ' + fields[max]);
          console.log('obj ' + objKey);
          if (objKey.indexOf(fields[max]) !== -1) {
            return { [objKey]: req.query[objKey] };
          }
          max--;
        }
        /*
        if (objKey.indexOf('cityName') !== -1)
          return { [objKey]: req.query[objKey] };
        */
      })
    );
    console.log(filter);
    let orderBy = '';
    if (req.query['order'] && req.query['sortBy']) {
      const order = req.query['order'] ? req.query['order'] : '';
      const sort = req.query['sortBy'] ? req.query['sortBy'] : '';
      orderBy = { [sort]: order };
    }
    const city = await City.find(filter).populate('state').sort(orderBy);

    return res.json(city);
  },
  async store(req, res) {
    const { cityName, state } = req.body;

    let city = await City.findOne({ cityName });

    if (city) {
      res.status(400).json({ success: false, message: 'Cidade já cadastrado' });
    }
    try {
      city = await City.create({
        cityName,
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
        cityName: req.body.cityName,
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
