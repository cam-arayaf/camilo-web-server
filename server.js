require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static(`${ __dirname }/public`));
hbs.registerPartials(`${ __dirname }/views/partials`);
app.set('view engine', 'hbs');

app.get('/', (req, resp) => {
    //resp.send({ name: 'Camilo', age: 27, url: req.url });
    resp.render('home', { name: 'Camilo Ignacio Araya Fuentes' });
});

app.get('/about', (req, resp) => {
    resp.render('about');
});

app.listen(port, () => {
    console.log(`Port: ${ port }`);
});