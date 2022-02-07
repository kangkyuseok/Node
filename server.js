const express = require('express');
const res = require('express/lib/response');
const app = express();



app.listen(6077, function(){
    console.log('listening on 6077')
});


app.get('/board',function(req, res){
    res.sendFile(__dirname + '/template/board.html')
});


app.get('/test',function(req, res){
    res.sendFile(__dirname + '/templates/header.html')
});


app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/v',function(req, res){
    res.sendFile(__dirname + '/templates/videolist.html')
});

app.get('/hello', (req, res) => {
    res.send('테스트')
});
