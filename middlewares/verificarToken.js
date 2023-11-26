// verificarToken.js
const jwt = require('jsonwebtoken');
const jwtSecret = 'suaChaveSecretaJWT';

// Middleware para verificar token JWT
const verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Falha na autenticação do token' });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = verificarToken;
