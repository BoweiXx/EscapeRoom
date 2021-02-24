#include <WiFiNINA.h>
#include <SPI.h>
#include <ArduinoMqttClient.h>
#include "secrets.h"

WiFiClient wifi;
MqttClient mqttClient(wifi);
int status = WL_IDLE_STATUS;

char broker[] = "bxtest001.cloud.shiftr.io";
int port = 443;
char topic[] = "keyboard";
char clientID[] = "reciever";
void setup() {
  Serial.begin(9600);
  while (!Serial);
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
    status = WiFi.beginEnterprise(ssid, user, pass);
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
  // if not connected to the broker, try to connect:
  if (!mqttClient.connected()) {
    Serial.println("reconnecting");
    connectToBroker();
  }

  // if you are subscribed and receiving messages
  // parse the messages and print them on the serial monitor
  // also, trigger actions based on what you receieve
  if (mqttClient.parseMessage() > 0) {
    Serial.print("Got a message on topic: ");
    Serial.println(mqttClient.messageTopic());
    // read the message:
    while (mqttClient.available()) {
      // convert numeric string to an int:
      // int message = mqttClient.parseInt();
      String in = (String)mqttClient.readStringUntil('\n');
      Serial.println(in);
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
