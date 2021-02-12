// //jshint esversion:6
//
// const express = require ("express");
// const https = require("https");
// const bodyParser = require("body-parser");
// const app = express();
//
//
//
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
//
// app.get("/", function(req, res) {
// res.sendFile(__dirname + "/index.html");
//
// });
//
// app.post("/", function(req, res){
//
// })
//
//
// app.listen(process.env.PORT || 3000, function() {
//   console.log("Server started on port 3000");
// });
//
// process.on('SIGTERM', () => {
//   server.close(() => {
//     console.log('Process terminated');
//   });
// });

const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hamburger = document.querySelector('#hamburger');

navToggle.addEventListener("click", () => {
  nav.classList.toggle('open');
  navIcon.forEach(icon => {
    icon.classList.toggle('hidden');
  });

});

window.addEventListener("resize", () => {
  if(document.body.clientWidth > 720) {
    nav.classList.remove('open');
    navIcon.forEach(icon => {
      icon.classList.add('hidden')
    });
    hamburger.classList.remove('hidden')
  }
});
