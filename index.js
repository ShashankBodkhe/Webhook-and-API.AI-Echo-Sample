"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  if (req.body.result.parameters.echoText != null
    && req.body.result.parameters.echoText)
  { 
  var speech = req.body.result.parameters.echoText
  }
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});




restService.post("/echo", function (req, res) {
  if (req.body.result.parameters.multiple != null
    && req.body.result.parameters.multiple)
    {var speech = "Yes, you can add multiple bank accounts to user to make payment on your account!!"}


  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
