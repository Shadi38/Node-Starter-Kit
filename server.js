const express = require("express"); 
const app = express();
const port = 9090;
const trainees = [
  { name: "Maziyar", region: "nort-west" },
  { name: "Shimen", region: "nort-west" },
  { name: "Zaw", region: "nort-west" },
  { name: "Azin", region: "london" },
  { name: "Chioma", region: "london" },
  { name: "Pakize", region: "london" },
];
app.get("/", function (request,response) {
   response.send("hello world"); 
});

app.get("/trainees",function (request,response) {
    console.log(request.query);
    response.send({trainees});
})

app.listen(port,function(){
    console.log("my express application is listening to port 9090");
});