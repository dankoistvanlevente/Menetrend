const express = require('express')
const dbData=require('./dbModule/dbMuveletek.js')
const path = require('path')
const port = 4444;

const app =express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
// const
// = require(

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/ejs', (req,res) =>{
    dbData.vonatKodok( (err, data) => {
        if(err) throw err;
        res.render('index', {vonatokListaja: data});
    })
});
/*
app.get('/vonatok', (req,res) =>{
    
});

app.get('/allomasok', (req,res) =>{
    
});

app.post('/ujvonat', (req,res) =>{
    
});

app.post('/deleteVonat',  (req,res) =>{
    
});

app.post('/idoModosit',  (req,res) =>{
    
});
*/
app.get("*", (req,res) =>{
    res.redirect('/');
})

app.listen(port);