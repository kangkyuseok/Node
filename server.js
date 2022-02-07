const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"))  // public 폴더에서 찾음 css 적용 시키기

app.get("/",(req, res) =>{
    console.log(req.user);
    res.sendFile(__dirname + "/index.html")
});

app.listen(6077, function(){          // funtion()을 빼면 => ? 하면되는듯
    console.log("listening on 6077")
});


app.get("/board",(req, res) => {
    res.sendFile(__dirname + "/templates/board.html")
});


app.get("/test",(req, res) =>{
    res.sendFile(__dirname + "/templates/header.html")
});




app.get("/v",(req, res) =>{
    res.sendFile(__dirname + "/templates/videolist.html")
});

app.get("/hello", (req, res) => {
    res.send("테스트")
});

app.use((req, res) => {
    res.sendFile(__dirname + "/404.html");
});

