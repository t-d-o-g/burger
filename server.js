const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgersController');

const app = express();
const PORT = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'local';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT} in ${env} environment.`);
});