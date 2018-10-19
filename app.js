const express = require('express');

const app = express();
const routes = require('./rotas/');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/', routes);
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
console.log(__dirname)

app.listen(3000, () => {
    console.log('listening port 3000...');
})

module.exports = app;
