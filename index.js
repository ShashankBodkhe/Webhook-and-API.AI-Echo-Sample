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
   if (req.body.queryResult.parameters.echoText != null
    && req.body.queryResult.parameters.echoText)
  { 
  var speech = req.body.queryResult.parameters.echoText;
  }
 else  if (req.body.queryResult.parameters.account_information == "contact number" 
    && req.body.queryResult.parameters.account_information)
  { 
  var speech = "9730973085";
  }
 
 // var speech= req.body.queryResult.parameters.echoText;
  return res.json({
    fulfillmentText: "fulfillmentText",
   fulfillmentMessages: [{simpleResponses: {simpleResponses: [   {
      "textToSpeech": "textToSpeech",
      "displayText": speech
   }]}}],
    source: "webhook-sample"
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
