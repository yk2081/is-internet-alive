// var ping = require("net-ping");

// var session = ping.createSession();

// setInterval(function() {
//     session.pingHost("8.8.8.8", function(error, target) {
//         if(error)
//             console.log(error.toString());
//         else   
//             console.log("Success");
//     })
// }, 1000);


//import NetworkSpeed from 'network-speed'; // ES6
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

getNetworkDownloadSpeed();

async function getNetworkDownloadSpeed() {
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/5000000';
  const fileSizeInBytes = 5000000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  let date = new Date().toString();
  console.log(date + " : " + speed.mbps + " mbps");
}

//getNetworkUploadSpeed();

async function getNetworkUploadSpeed() {
  const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/catchers/544b09b4599c1d0200000289',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const fileSizeInBytes = 2000000
  const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
  let date = new Date().toLocaleDateString();
  console.log(date + " : " + speed.mbps + " mbps");
}

setInterval(function() {
    getNetworkDownloadSpeed();
}, 5000)