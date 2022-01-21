const express = require('express');
const app = express();

app.listen(6077, function(){
    console.log('listening on 6077')
});


app.get('/go',function(요청, 응답){
    응답.send('테스트입니덩')
});


app.get('/',function(요청, 응답){
    응답.sendFile(__dirname + '/index.html')
});