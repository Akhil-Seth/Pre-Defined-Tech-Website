const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const routeNavItems = require('./routes/NavBar-getItems');
const routeHome = require('./routes/home');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "js")));

// app.use('/admin' , routeSercet);
app.use('/admin' , routeNavItems);
app.use(routeHome);
app.use(errorController.get404);

// app.use(errorController.get404);

app.listen(3000);
