let broker = {
  hostname: "bxtest002.cloud.shiftr.io",
  port: 443,
};
let creds = {
  clientID: "letter2",
  username: "bxtest002",
  password: "mfh9AHo7TjtRPhwX",
};
let client;
let topic = "letter1";
/*-----------------------MQTT--------------------------------*/
let color = {
  redc: 255,
  g: 255,
  b: 255,
  a: 15
};
let delta;
let step = 0.00001;
let n = 20; //number of blobs
let r = 100;
let vnumber = 1;
let maxRange = 250;
let stage = 0;
const answer = [8, 9, 2, 3, 5];
let sublocx = [];
let sublocy = [];
let arrayImg = [];
let input = [];
var execution = false;
var alertExecution = false;
var table;
var loveletter;
function preload() {
  arrayImg[1] = loadImage("assets/1.png");
  arrayImg[2] = loadImage("assets/2.png");
  arrayImg[3] = loadImage("assets/3.png");
  arrayImg[4] = loadImage("assets/4.png");
  arrayImg[5] = loadImage("assets/5.png");
  arrayImg[6] = loadImage("assets/6.png");
  arrayImg[7] = loadImage("assets/7.png");
  arrayImg[8] = loadImage("assets/8.png");
  arrayImg[9] = loadImage("assets/9.png");
  arrayImg[10] = loadImage("assets/10.png");
  table = loadImage("assets/table.png");
  loveletter = loadImage("assets/loveletter.jpg");
}

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  client = new Paho.MQTT.Client(
    broker.hostname,
    Number(broker.port),
    creds.clientID
  );
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  client.connect({
    onSuccess: onConnect,
    userName: creds.username,
    password: creds.password,
    useSSL: true,
  });
  delta = random(20);
}

function draw() {
  switch (stage) {
    case 0:
      background(255);
      textSize(60);
      text("waiting for another player", width/2-300,height/2);
      break;
    //letter phase
    case 1:
      image(loveletter, 0,0,width,height);
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
      for (var j = 1; j < 11; j++) {
        // console.log(arrayImg);
        //on the left
        if (j <= 5) {
          let offset = 100;
          let tempXLoc = width / 4;
          let tempYloc = (windowHeight - 250) / 6;
          let Ystep = (windowHeight - 250) / 6;
          image(
            arrayImg[j],
            tempXLoc + offset * ((j % 2) - 2),
            tempYloc + Ystep * j,
            50,
            50
          );
          if (!execution) {
            sublocx.push(tempXLoc + offset * ((j % 2) - 2));
            sublocy.push(tempYloc + Ystep * j);
          }
        } else {
          let offset2 = 100;
          let tempXLoc2 = (7 * width) / 8;
          let tempYLoc2 = (windowHeight - 250) / 6;
          let Ystep2 = (windowHeight - 250) / 6;
          image(
            arrayImg[j],
            tempXLoc2 + offset2 * ((j % 2) - 2),
            tempYLoc2 + Ystep2 * (j - 5),
            50,
            50
          );
          if (!execution) {
            sublocx.push(tempXLoc2 + offset2 * ((j % 2) - 2));
            sublocy.push(tempYLoc2 + Ystep2 * (j - 5));
          }
        }
      }

      execution = true;
      // console.log("locx = " + sublocx);
      // console.log("locy = " + sublocy);
      /*-----------------------------------------------Silly Visual----------------------------------------*/
      for (var k = 0; k < 11; k++) {
        if (dist(mouseX, mouseY, sublocx[k], sublocy[k]) < 50) {
          noFill();
          stroke(255, 0, 120);
          strokeWeight(5);
          ellipse(sublocx[k] + 25, sublocy[k] + 25, 80, 80);
        }
      }
      console.log(input);
      let t = millis() / 1000;
      for (let l = 0; l < n; l++) {
        let noisiness = maxRange * (l / n);
        noStroke();
        fill(color.redc, color.g, color.b, color.a);
        blob(r, width / 2, height / 2, delta, t - l * step, noisiness, vnumber);
      }
      image(table, width*2/5, height*75/100, 400,200);
      break;
    default:
      break;
  }
}

function mousePressed() {
  for (var m = 0; m < 11; m++) {
    if (dist(mouseX, mouseY, sublocx[m] + 25, sublocy[m] + 25) < 50) {
      input.push(m + 1);
      vnumber = input.length * 3;
    }
  }
}

function answerMatch(a1, a2) {
  return JSON.stringify(a1) == JSON.stringify(a2);
}

function blob(size, xC, yC, k, t, range, vn) {
  beginShape();
  let angleStep = 360 / vn;
  for (let angle = 0; angle <= 360 + 2 * angleStep; angle += angleStep) {
    let r = size + noise(k * abs(cos(angle)), k * abs(sin(angle)), t) * range;
    curveVertex(xC + r * cos(angle), yC + r * sin(angle));
  }
  endShape();
}

/*-----------------------MQTT--------------------------------*/
function onConnect() {
  client.subscribe(topic);
  console.log("onConnect");
  message = new Paho.MQTT.Message("helloletter1");
  message.destinationName = topic;
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(response) {
  if (response.errorCode !== 0) {
    console.log("on connection Lost: " + response.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  let incoming = split(trim(message.payloadString), "/");
  if (incoming == "helloletter2") {
    stage = 1;
  }
  if (incoming == "stage2") {
    stage = 2;
  }
}

function sendMqttMessage(msg) {
  // if the client is connected to the MQTT broker:
  if (client.isConnected()) {
    // start an MQTT message:
    message = new Paho.MQTT.Message(msg);
    // choose the destination topic:
    message.destinationName = topic;
    // send it:
    client.send(message);
  }
}