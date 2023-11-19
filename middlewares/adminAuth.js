const adminAuth= (req, res, next) => {
    // Verica se o usuário está autenticado como adm
    if (req.session.user && req.session.user.isAdmin) {
      // Se for um adm, continue para a próxima rota
      next();
    } else {
      // Se não for um adm
      res.status(403).send('Acesso Negado!');
    }
  };
  
  module.exports = adminAuth;