const jwt = require('jsonwebtoken');

// Chave secreta para assinatura do JWT.
// Em produção, isso deve ser carregado de uma variável de ambiente (process.env.JWT_SECRET)
const JWT_SECRET = process.env.JWT_SECRET || 'token-secreto-administracao-ceu';

module.exports = function verifyAdminToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  
  if (!authHeader) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Acesso negado. Token de autenticação ausente.'
    });
  }

  // Esperado formato "Bearer <token>"
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Formato do token inválido. Use "Bearer <token>".'
    });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded; // Salva os dados do admin decodificados na requisição
    next(); // Permite prosseguir para o próximo middleware ou rota
  } catch (err) {
    return res.status(403).json({
      error: 'Forbidden',
      message: 'Token de autenticação inválido ou expirado.'
    });
  }
};
