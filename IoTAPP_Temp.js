const firebaseConfig = {
  apiKey: "AIzaSyAcQny59ysfpBkhQ3xGjyztIeDJcFo0G4o",
  authDomain: "iotapp-5608d.firebaseapp.com",
  databaseURL: "https://iotapp-5608d-default-rtdb.firebaseio.com",
  projectId: "iotapp-5608d",
  storageBucket: "iotapp-5608d.appspot.com",
  messagingSenderId: "674127551078",
  appId: "1:674127551078:web:8b0f3b61c89682af1caba7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var WeatherApp = document.getElementById('WeatherApp')
var dbRef = firebase.database();

var Humedad = 0;
var Presion = 0;
var Temperatura = 0;
var grados = 1;

//let dbTemp = firebase.database().ref("Monitor/Temperatura/");
let dbTemp = dbRef.ref("/ESP32IoTAPP_TEMP/TEMP");
dbTemp.on('value', function(snapshot) {
  console.log("la temperatura es", snapshot.val());
   Temperatura=snapshot.val();
 document.getElementById("TemperaturaId").innerHTML  = Temperatura.toFixed(2) + " " + "°C";
});


//let dbPres = firebase.database().ref("Monitor/Presion/");
let dbPres = dbRef.ref("/ESP32IoTAPP_TEMP/PRES");
dbPres.on('value', function(snapshot) {
  console.log("la presion es", snapshot.val());
   Presion=snapshot.val();
 document.getElementById("PresionId").innerHTML  = Presion.toFixed(0) + " " + "mmHG";
});

// Humidity
let dbHum = dbRef.ref("/ESP32IoTAPP_TEMP/HUM");
dbHum.on('value', function(snapshot){
  console.log("La humedad es", snapshot.val());
  Humedad = snapshot.val();
document.getElementById("HumedadId").innerHTML = Humedad.toFixed(2) + " %";
});