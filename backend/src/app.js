var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

//============ DB Conn ==========================
// const cors = require('cors');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');

// app.use(cors());
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json());

// // Database connection
// const database = mysql.createPool({
//     connectionLimit : 10,
//     host            : '127.0.0.1',
//     user            : 'lucas',
//     password        : 'lsf@SQL',
//     database        : 'Test'
// });

// // Route to handle user signup
// app.post('/signup',(req,res) => {
//     const name = req.body.name;
//     const password = req.body.password;
    
//     database.query("INSERT INTO users (name,password) VALUES (?,?)",[name,password],(err) => {
//         if (err){
//             console.log(err);
//             // Send a proper error response to the client
//             res.status(500).send({ error: "Error inserting data into the database." });
//         } else {
//             // Send a success response
//             res.status(200).send({ name: name });
//         }
//     });
// })

// // Start the server
// app.listen(8080, () => {
//     console.log('Server listening on port 8080')
// })
//==============================================