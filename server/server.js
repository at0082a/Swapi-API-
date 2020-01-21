const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const axios = require('axios');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/planets', function (req, res) {
  axios.get('https://swapi.co/api/planets')
  .then(function (response) {
    res.send({data: response.data.results});
  });
});

app.get('/people', function (req, res) {
  axios.get(`https://swapi.co/api/people/`)
  .then(function (response) {
    res.send({data: response.data.results});
  });
});

app.listen(port, function() {
  console.log("Runnning on " + port);
});

