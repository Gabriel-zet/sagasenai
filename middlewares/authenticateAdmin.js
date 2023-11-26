const authenticateAdmin = (req, res, next) => {
  if (req.session.adminId) {
    next();
  } else {
    res.status(401).json({ message: 'Acesso não autorizado' });
  }
};

module.exports = authenticateAdmin

