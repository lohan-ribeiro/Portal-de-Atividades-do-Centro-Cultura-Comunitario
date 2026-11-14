const app = require('./app');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}: http://localhost:${port}`);
});

server.on('error', onError);

function normalizePort(val) {
  const parsedPort = parseInt(val, 10);
  if (isNaN(parsedPort)) {
    return val;
  }
  if (parsedPort >= 0) {
    return parsedPort;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Porta ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requer privilégios elevados.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} já está em uso.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

module.exports = server;
