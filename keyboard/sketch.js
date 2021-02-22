const correctAnswer = ['e', 'e', 's', 's', 'c', 'c', 'a', 'a', 'p', 'p', 'e', 'e']; //ESCAPE compromised 
const maxi = 12; //max input times = 6 or can just retrieve from reading len of crtasr
var indexi = 0; //time for inputs
var indext = 0;
var inputAnswer = [];
var typing = false;
var arrayA = [];
var arrayB = [];

/*--------------------------------MQTT--------------------------------------*/
let broker = {
  hostname: 'bxtest001.cloud.shiftr.io',
  port: 443
};
let client;
let creds = {
  clientID: "typer",
  userName: "bxtest001",
  password: "mYhAjRbsmVD5PyIc"
}
let topic = "keyboard";

function preload() {
  for (var i = 1; i < 27; i++) {
    arrayA[i] = loadImage("asset/alphabet/" + i + ".png");
    arrayB[i] = loadImage("asset/black/" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  client = new Paho.MQTT.Client(broker.hostname, Number(broker.port), creds.clientID);
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  client.connect({
    onSuccess: onConnect, // callback function for when you connect
    userName: creds.userName, // username
    password: creds.password, // password
    useSSL: true // use SSL
  });
  // let img = image(arrayA[1], 0, height / 2);
}

function draw() {

  keyTyped();
  keyReleased()
  // cleaner();
  if (answerMatch(inputAnswer, correctAnswer)) {
    textSize(32);
    text("You Got It!", width / 2, height / 2);
    fill(0, 102, 153);
    sendMqttMessage("win");
    return -1;
  }
  //work on this tmr
  if (inputAnswer.length > correctAnswer.length && !answerMatch(inputAnswer, correctAnswer)) {
    for (var i = inputAnswer.length; i > 0; i--) {
      inputAnswer.pop();
      indexi = 0;
      background(255);
      indext++;
    }
  }
  // console.log(inputAnswer.length);
  console.log(indexi);
  // background(220);

}

//the name of the png files better in sequence for the simplicity of the code 
//show the corresponding code, but compare w/ the array
function keyTyped() {
  switch (key) {
    case 'a':
      if (indext % 2 == 0) {
        if (indexi % 2 == 1 && indexi != 0) {
          image(arrayA[1], (width / 7) * (indexi / 2) - 1, height / 2);
        }
      } else {
        if (indexi % 2 == 0 && indexi != 0) {
          image(arrayA[1], (width / 7) * (indexi / 2) - 1, height / 2);
        }
      }
      break;
    case 'b':
      if (indext % 2 == 0) {
        if (indexi % 2 == 1 && indexi != 0) {
          image(arrayA[2], (width / 7) * (indexi / 2) - 1, height / 2);
        }
      } else {
        if (indexi % 2 == 0 && indexi != 0) {
          image(arrayA[2], (width / 7) * (indexi / 2) - 1, height / 2);
        }
      }
      break;
    case 'c':
      if (indext % 2 == 0) {
        if (indexi % 2 == 1 && indexi != 0) {
          image(arrayA[3], (width / 7) * (indexi / 2) - 1, height / 2);
        }
      } else {
        if (indexi % 2 == 0 && indexi != 0) {
          image(arrayA[3], (width / 7) * (indexi / 2) - 1, height / 2);
        }
      }
      break;
    case 'd':
      if (indext % 2 == 0) {
        if (indexi % 2 == 1 && indexi != 0) {
          image(arrayA[4], (width / 7) * (indexi / 2) - 1, height / 2);
        }
      } else {
        if (indexi % 2 == 0 && indexi != 0) {
          image(arrayA[4], (width / 7) * (indexi / 2) - 1, height / 2);
        }
      }
      case 'e':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[5], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[5], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'f':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[6], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[6], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'g':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[7], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[7], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'h':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[8], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[8], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'i':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[9], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[9], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'j':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[10], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[10], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'k':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[11], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[11], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'l':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[12], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[12], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'm':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[13], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[13], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'n':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[14], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[14], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'o':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[15], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[15], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'p':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[16], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[16], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'q':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[17], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[17], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'r':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[18], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[18], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 's':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[19], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[19], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 't':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[20], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[20], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'u':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[21], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[21], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'v':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[22], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[22], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'w':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[23], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[23], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'x':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[24], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[24], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'y':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[25], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[25], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      case 'z':
        if (indext % 2 == 0) {
          if (indexi % 2 == 1 && indexi != 0) {
            image(arrayA[26], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        } else {
          if (indexi % 2 == 0 && indexi != 0) {
            image(arrayA[26], (width / 7) * (indexi / 2) - 1, height / 2);
          }
        }
        break;
      default:
        break;
  }
}
//push whatever typed into the inputAnswer array
function keyReleased() {
  if (typing == false && key != "") {
    inputAnswer.push(key);
    indexi++;
    typing = true;
  } else if (key != "" && typing == true) {
    typing = false;
    key = "";
  }
  return false;
}
/*it has 2 e s in the array, this would not work*/
// function cleaner(){
//   inputAnswer.forEach((c) =>{
//     if(!uniqueChars.includes(c)){
//       uniqueChars.push(c);
//     }
//   })
// }
function answerMatch(a1, a2) {
  return JSON.stringify(a1) == JSON.stringify(a2);
}

/* -----------------------------------MQTT-------------------------------------------------*/
function onConnect() {
  console.log("onConnect");
  client.subscribe(topic);
  message = new Paho.MQTT.Message("HELLO");
  message.destinationName = topic;
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(response) {
  if (responseObject.errorCode !== 0) {
    console.log("on connection Lost: " + responseObject.errorMessage)
  }
}

// called when a message arrives
function onMessageArrived(message) {
  if (message == "win") {

  } else;
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