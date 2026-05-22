// backend/middlewares/auth.js

module.exports = function verifyApiKey(req, res, next) {
  // Obtém a API Key do cabeçalho da requisição
  const apiKey = req.header('X-API-Key');
  
  // Em produção, você pode definir isso em um arquivo .env
  const validApiKey = process.env.API_KEY_TERCEIROS || 'doHcKoFNSXBQSH5YuGKRll13Y4U9Ypm9lXbkXwYsuPPnT2tn9MBhi0TsWsAumIun';
  
  if (!apiKey || apiKey !== validApiKey) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Acesso negado. Chave de API (X-API-Key) inválida ou ausente.'
    });
  }
  
  next(); // Chave válida, prossegue para a rota
};