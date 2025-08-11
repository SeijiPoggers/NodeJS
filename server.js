const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Servidor Express...')
});

app.get('/sobre', (req,res)=>{
    res.send('Pagina Sobre')
});

app.get('/produtos', (req,res)=>{
    res.send('Pagina Produtos')
});

//API REST
app.get('/api/produtos', (req, res)=>{
    const produtos=[
        {id: 1, nome: "Mouse"},
         {id: 2, nome: "Teclado"}
    ];
    res.json(produtps);
});

app.listen(3000, ()=>{
    console.log('http://localhost:3000');
});