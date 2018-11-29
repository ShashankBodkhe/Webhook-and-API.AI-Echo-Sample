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
  // if (req.body.queryResult.parameters.echoText != null
  //  && req.body.queryResult.parameters.echoText)
  //{ 
 // var speech = req.body;
 // }
 // else 
 // var speech= "else condition";
  return res.json({
    fulfillmentText: "Hello !!!! :)",
    fulfillmentMessages: [
      {
        "text": [
          "text response"
        ],
      }
    ],
    source: "webhook-echo-sample"
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
