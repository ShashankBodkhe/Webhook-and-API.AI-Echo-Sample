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
    fulfillmentText: speech,
    
    source: "webhook-echo-sample"
  });
});




restService.post("/echo", function (req, res) {
  if (req.body.result.parameters.multiple != null
    && req.body.result.parameters.multiple)
    {var speech = "2M$"}


  return res.json({
    fulfillmentText: speech,
   source: "webhook-echo-sample"
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
