const jwt = require('jsonwebtoken');
const jwtSecret = 'suaChaveSecretaJWT';

const verificarToken = (req, res, next) => {
  console.log('m')
  const token = req.headers['authorization'];
  console.log(req.headers);
  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Falha na autenticação do token' });
      }
      req.decoded = decoded;
      next();
    });
  }else{
    return res.status(403).json({ message: 'Token não fornecido', token: token });
  }
};

module.exports = verificarToken;
