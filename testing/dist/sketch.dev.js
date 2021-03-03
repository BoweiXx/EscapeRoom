"use strict";

var broker = {
  hostname: "bxtest002.cloud.shiftr.io",
  port: 443
};
var creds = {
  clientID: "letter2",
  username: "bxtest002",
  password: "mfh9AHo7TjtRPhwX"
};
var client;
var topic = "letter2";
/*-----------------------MQTT--------------------------------*/

var color = {
  redc: 255,
  g: 255,
  b: 255,
  a: 15
};
var delta;
var step = 0.00001;
var n = 20; //number of blobs

var r = 100;
var vnumber = 1;
var maxRange = 300;
var stage = 2;
var answer = [8, 9, 3, 4, 5];
var sublocx = [];
var sublocy = [];
var arrayImg = [];
var input = [];
var execution = false;
var alertExecution = false;

function preload() {
  for (var i = 1; i < 11; i++) {
    arrayImg[i] = loadImage("assets/" + i + ".png");
  } // console.log("load image successfully");

}

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  client = new Paho.MQTT.Client(broker.hostname, Number(broker.port), creds.clientID);
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  client.connect({
    onSuccess: onConnect,
    userName: creds.username,
    password: creds.password,
    useSSL: true
  });
  delta = random(20);
}

function draw() {
  switch (stage) {
    //letter phase
    case 1:
      background(0);
      break;
    //synthesization phase

    case 2:
      background(0, 10);
      /*-----------------------------------------------Truth table------------------------------------*/

      vumber = input.length * 3;

      if (answerMatch(input, answer)) {
        if (!alertExecution) {
          alert("Synthesis Complete");
        }

        alertExecution = true;
        sendMqttMessage("winner");
        vnumber = 1000;
        color.redc = 255;
        color.g = 0;
        color.b = 0;
        color.a = 1;
      }

      if (input.length > answer.length && !answerMatch(input, answer)) {
        for (var i = input.length; i > 0; i--) {
          input.pop();
          vnumber = 2;
        }
      }
      /*------------------------------------------------icon-----------------------------------------*/


      for (var i = 1; i < 11; i++) {
        // console.log(arrayImg);
        //on the left
        if (i <= 5) {
          var offset = 100;
          var tempXLoc = width / 4;
          var tempYloc = (windowHeight - 250) / 6;
          var Ystep = (windowHeight - 250) / 6;
          image(arrayImg[i], tempXLoc + offset * (i % 2 - 2), tempYloc + Ystep * i, 50, 50);

          if (!execution) {
            sublocx.push(tempXLoc + offset * (i % 2 - 2));
            sublocy.push(tempYloc + Ystep * i);
          }
        } else {
          var offset2 = 100;
          var tempXLoc2 = 7 * width / 8;
          var tempYLoc2 = (windowHeight - 250) / 6;
          var Ystep2 = (windowHeight - 250) / 6;
          image(arrayImg[i], tempXLoc2 + offset2 * (i % 2 - 2), tempYLoc2 + Ystep2 * (i - 5), 50, 50);

          if (!execution) {
            sublocx.push(tempXLoc2 + offset2 * (i % 2 - 2));
            sublocy.push(tempYLoc2 + Ystep2 * (i - 5));
          }
        }
      }

      execution = true; // console.log("locx = " + sublocx);
      // console.log("locy = " + sublocy);

      /*-----------------------------------------------Silly Visual----------------------------------------*/

      for (var i = 0; i < 11; i++) {
        if (dist(mouseX, mouseY, sublocx[i], sublocy[i]) < 50) {
          noFill();
          stroke(255, 0, 120);
          strokeWeight(5);
          ellipse(sublocx[i] + 25, sublocy[i] + 20, 80, 80);
        }
      }

      console.log(input);
      var t = millis() / 1000;

      for (var _i = 0; _i < n; _i++) {
        var noisiness = maxRange * (_i / n);
        noStroke();
        fill(color.redc, color.g, color.b, color.a);
        blob(r, width / 2, height / 2, delta, t - _i * step, noisiness, vnumber);
      }

      break;

    default:
      break;
  }
}

function mousePressed() {
  for (var i = 0; i < 11; i++) {
    if (dist(mouseX, mouseY, sublocx[i] + 25, sublocy[i] + 20) < 50) {
      input.push(i + 1);
      vnumber = input.length * 3;
    }
  }
}

function answerMatch(a1, a2) {
  return JSON.stringify(a1) == JSON.stringify(a2);
}

function blob(size, xC, yC, k, t, range, vn) {
  beginShape();
  var angleStep = 360 / vn;

  for (var angle = 0; angle <= 360 + 2 * angleStep; angle += angleStep) {
    var _r = size + noise(k * abs(cos(angle)), k * abs(sin(angle)), t) * range;

    curveVertex(xC + _r * cos(angle), yC + _r * sin(angle));
  }

  endShape();
}
/*-----------------------MQTT--------------------------------*/


function onConnect() {
  client.subscribe(topic);
  console.log("onConnect");
  message = new Paho.MQTT.Message("stage2");
  message.destinationName = topic;
  client.send(message);
} // called when the client loses its connection


function onConnectionLost(response) {
  if (response.errorCode !== 0) {
    console.log("on connection Lost: " + response.errorMessage);
  }
} // called when a message arrives


function onMessageArrived(message) {
  var incoming = split(trim(message.payloadString), "/");

  if (incoming == "stage2") {
    stage = 2;
  }
}

function sendMqttMessage(msg) {
  // if the client is connected to the MQTT broker:
  if (client.isConnected()) {
    // start an MQTT message:
    message = new Paho.MQTT.Message(msg); // choose the destination topic:

    message.destinationName = topic; // send it:

    client.send(message);
  }
}