const adminAuth = (req, res, next) => {
  // Inicie a sessão antes de verificar
  req.session.save(() => {
      // Verifica se o usuário está autenticado como admin
      if (req.session.adm && req.session.adm.isAdmin) {
          // Se for um admin, continue para a próxima rota
          next();
      } else {
          // Se não for um admin, redirecione ou envie uma resposta 403
          res.status(403).send('Acesso Negado!');
      }
  });
};

module.exports = adminAuth