const users = [
  {
      id:1,
      name:"Tony Stark",
      role:"Legendary Avenger",
  },
  {
      id:2,
      name:"Thor Odinson",
      role:"The oldest Avenger",
  },
  {
      id:3,
      name:"Steven Strange",
      role:"New Avenger",
  },
]
const express = require("express");
const app = express();

app.delete('/user/:id', function (req, res) {
  const idOfUser = parseInt(req.params.id);
  users = users.filter((user) => user.id !== idOfUser);
  res.json(users);
});

app.get('/user/:id' , function (req,res){
  res.send(JSON.stringify(users.find((item) => item.id == req.params.id)));
});

app.listen(3022, function(){
  console.log("Сервер запущен под номером 3000");
})