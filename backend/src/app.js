var path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var adminRouter = require('./routes/admin');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/', adminRouter);
app.use('/users', usersRouter);
app.use('/api/v1', apiRouter);

// Trata rotas não encontradas (404)
app.use(function(req, res, next) {
  res.status(404).json({
    success: false,
    error: 'Not Found',
    message: 'Rota não encontrada.'
  });
});

// Tratamento global de erros
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    error: err.name || 'InternalServerError',
    message: err.message || 'Erro interno no servidor.'
  });
});

module.exports = app;

