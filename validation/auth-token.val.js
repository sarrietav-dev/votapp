const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send({ error: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = verified;
    next();
    return res.status(200);
  } catch (err) {
    return res.status(400).send({ error: 'Invalid token' });
  }
};
