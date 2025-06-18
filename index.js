const express = require ('express');
const app = espress();
const port = 3000;

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (request, Response) => {
    Response.render('home');
});

app.listen(3000, () => {
    console.log('Servidor executando: na porta 3000');
});