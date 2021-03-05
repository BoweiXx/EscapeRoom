"use strict";

var broker = {
  hostname: "bxtest002.cloud.shiftr.io",
  port: 443
};
var creds = {
  clientID: "letter1",
  username: "bxtest002",
  password: "mfh9AHo7TjtRPhwX"
};
var client;
var topic = "letter1";
var A = false;
var B = false;
var C = false;
var D = false;
var E = false;
var F = false;
var rectA;
var rectB;
var rectC;
var rectD;
var rectE;
var rectF;
var colA = 255;
var colB = 255;
var colC = 255;
var colD = 255;
var colE = 255;
var colF = 255;

function setup() {
  createCanvas(600, 400);
  client = new Paho.MQTT.Client(broker.hostname, Number(broker.port), creds.clientID);
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  client.connect({
    onSuccess: onConnect,
    userName: creds.username,
    password: creds.password,
    useSSL: true
  });
}

function draw() {
  background(220);
  push();
  fill(colA);
  rectA = rect(0, 0, width / 3, height / 2);
  pop();
  push();
  fill(colB);
  rectB = rect(width / 3, 0, width / 3, height / 2);
  pop();
  push();
  fill(colC);
  rectC = rect(width / 3 * 2, 0, width, height / 2);
  pop();
  push();
  fill(colD);
  rectD = rect(0, height / 2, width / 3, height);
  pop();
  push();
  fill(colE);
  rectE = rect(width / 3, height / 2, width / 3 * 2, height);
  pop();
  push();
  fill(colF);
  rectF = rect(width / 3 * 2, height / 2, width, height);
  pop(); //   if(A == true && C == true && E == true){
  //     print('win!')
  //   } else if(A == true) {
  //     print('interesting...')
  //   } else if( C == true) {
  //     print('great')
  //   }else if(E == true){
  //     print('well done')
  //   } else {
  //     print('find your way')
  //   }
  //   if(A == true && C == true || A == true && E == true ||C == true && E == true){
  //     print('almost there!')
  //   }
  //   let count = calculateRightCount();

  printStatus();
} // 此处引入计数和状态function，是一种更好的写法：这意味着不需要去考虑哪些方块被触发了，只需要考虑被触发的方块的数量。如果有更多的方块状态需要统计的话，这几乎是唯一可以选择的方式。


function printStatus() {
  var count = 0;

  if (A) {
    count++;
  }

  if (C) {
    count++;
  }

  if (E) {
    count++;
  }

  if (count == 1) {
    print('interesting..');
  }

  if (count == 2) {
    print('almost there!');
  }

  if (count == 3) {
    print('well done!!!');
    sendMqttMessage("helloletter2");
  }
}

function mousePressed() {
  if (mouseX < width / 3 && mouseX > 0 && mouseY < height / 2 && mouseY > 0) {
    A = !A;

    if (A) {
      colA = 0;
    } else {
      colA = 255;
    } // colA = A ? 0 : 255;

  }

  if (mouseX < width / 3 * 2 && mouseX > width / 3 && mouseY < height / 2 && mouseY > 0) {
    B = !B;

    if (B) {
      colB = 0;
    } else {
      colB = 255;
    }
  }

  if (mouseX < width && mouseX > width / 3 * 2 && mouseY < height / 2 && mouseY > 0) {
    C = !C;

    if (C) {
      colC = 0;
    } else {
      colC = 255;
    }
  }

  if (mouseX < width / 3 && mouseX > 0 && mouseY < height && mouseY > height / 2) {
    D = !D;

    if (D) {
      colD = 0;
    } else {
      colD = 255;
    }
  }

  if (mouseX < width / 3 * 2 && mouseX > width / 3 && mouseY < height && mouseY > height / 2) {
    E = !E;

    if (E) {
      colE = 0;
    } else {
      colE = 255;
    }
  }

  if (mouseX < width && mouseX > width / 3 * 2 && mouseY < height && mouseY > height / 2) {
    F = !F;

    if (F) {
      colF = 0;
    } else {
      colF = 255;
    }
  }
}

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
  var incoming = split(trim(message.payloadString), "/"); // if (incoming == "stage2") {
  //   stage = 2;
  // }
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