module.exports = async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) {
    return res
      .status(401)
      .json({ success: false, message: 'Acesso não autorizado' });
  }

  return next();
};
