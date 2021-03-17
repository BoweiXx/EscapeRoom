#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
#include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif
#define PIN        11
#include <WiFiNINA.h>
#include <SPI.h>
#include <ArduinoMqttClient.h>
#include "secrets.h"
#define NUMPIXELS 64
#define CHARACTER_E 0x3C4299A5BD81423C
#define CHARACTER_S 0x897E182424187E91
#define CHARACTER_C 0x1c24448a84402010
#define CHARACTER_A 0x00314e8808384986
#define CHARACTER_P 0x101010ff52141810
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
WiFiClient wifi;
MqttClient mqttClient(wifi);
int status = WL_IDLE_STATUS;

char broker[] = "bxtest001.cloud.shiftr.io";
int port = 1883;
char topic[] = "keyboard";
char clientID[] = "reciever";
void setup() {
  Serial.begin(9600);
  while (!Serial);
  
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  pixels.begin();
  while (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Connect to module failed!");
    while (1);
  }
  String fv = WiFi.firmwareVersion();
  if (fv < WIFI_FIRMWARE_LATEST_VERSION) {
    Serial.println(fv);
    Serial.println("Please upgrade the firmware");
  }
  while (status != WL_CONNECTED) {
    Serial.print("FAILED TO COONECT TO WPA SSID  ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);
    delay(10000);
  }

  Serial.println("CONNECTED TO THE NETWORK");
  /*MQTT*******************************************************************************************/
  mqttClient.setId(clientID);
  mqttClient.setUsernamePassword(SECRET_MQTT_USER, SECRET_MQTT_PASS);
  while (!connectToBroker()) {
    Serial.println("attempting to connect to broker");
    delay(1000);
  }
  Serial.println("connect to broker");

}

void loop() {
  pixels.clear();
  // if not connected to the broker, try to connect:
  if (!mqttClient.connected()) {
    Serial.println("reconnecting");
    connectToBroker();
  }

  // if you are subscribed and receiving messages
  // parse the messages and print them on the serial monitor
  // also, trigger actions based on what you receieve
  if (mqttClient.parseMessage() > 0) {
    // read the message:
    while (mqttClient.available()) {
      // convert numeric string to an int:
      // int message = mqttClient.parseInt();
      char in = (char)mqttClient.read();
      Serial.println(in);
      if (in == 'e') {
        for (int i = 0; i < NUMPIXELS; i++) { // For each pixel...
          if (CHARACTER_E >> i & 0x1 == 0x1) {
            pixels.setPixelColor(i, pixels.Color(0, 10, 0));
            
          } else {
            pixels.setPixelColor(i, pixels.Color(0, 0, 0));
          }
        }
        pixels.show();
      }
      if (in == 's') {
        for (int i = 0; i < NUMPIXELS; i++) { // For each pixel...
          if (CHARACTER_S >> i & 0x1 == 0x1) {
            pixels.setPixelColor(i, pixels.Color(0, 10, 0));
          } else {
            pixels.setPixelColor(i, pixels.Color(0, 0, 0));
          }
          Serial.println('s');
        }
        pixels.show();
      }
      if (in == 'c') {
        for (int i = 0; i < NUMPIXELS; i++) { // For each pixel...
          if (CHARACTER_C >> i & 0x1 == 0x1) {
            pixels.setPixelColor(i, pixels.Color(0, 10, 0));
          } else {
            pixels.setPixelColor(i, pixels.Color(0, 0, 0));
          }
        }
        pixels.show();
      }
      if (in == 'a') {
        for (int i = 0; i < NUMPIXELS; i++) { // For each pixel...
          if (CHARACTER_A >> i & 0x1 == 0x1) {
            pixels.setPixelColor(i, pixels.Color(0, 10, 0));
          } else {
            pixels.setPixelColor(i, pixels.Color(0, 0, 0));
          }

        }
        pixels.show();
      }
      if (in == 'p') {
        for (int i = 0; i < NUMPIXELS; i++) { // For each pixel...
          if (CHARACTER_P >> i & 0x1 == 0x1) {
            pixels.setPixelColor(i, pixels.Color(0, 10, 0));
          } else {
            pixels.setPixelColor(i, pixels.Color(0, 0, 0));
          }

        }
        pixels.show();
      }
    }
  }

  if (mqttClient.connected()) {
    // do things when connected
  }
}


boolean connectToBroker() {
  // if the MQTT client is not connected:
  if (!mqttClient.connect(broker, port)) {
    // print out the error message:
    Serial.print("MQTT connection failed. Error no: ");
    Serial.println(mqttClient.connectError());
    // return that you're not connected:
    return false;
  }
  // once you're connected, you can proceed:
  mqttClient.subscribe(topic);
  // return that you're connected:
  return true;

}