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
  var speech = "9999999999";
  }
  else  if (req.body.queryResult.parameters.account_information == "account number" 
  && req.body.queryResult.parameters.account_information)
{ 
var speech = "99999999999999";
}
else  if (req.body.queryResult.parameters.account_information == "DOB" 
&& req.body.queryResult.parameters.account_information)
{ 
var speech = "1 Jan 2019";
}
else  if (req.body.queryResult.parameters.account_information == "address" 
&& req.body.queryResult.parameters.account_information)
{ 
var speech = " floor no 1 , Building no 1 , address";
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
