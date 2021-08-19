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

async function getNetworkDownloadSpeed() {
  const baseUrl = 'http://cleoemr.com:9000/dummy_data';
  const fileSizeInBytes = 5000000;
  let date = new Date().toString();
  try {
    let speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    console.log(date + " : " + speed.mbps + " mbps");
  } catch (err) {
    console.log(date + " : " + err.toString());
  }

}

//getNetworkUploadSpeed();

// async function getNetworkUploadSpeed() {
//   const options = {
//     hostname: 'www.google.com',
//     port: 80,
//     path: '/catchers/544b09b4599c1d0200000289',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   const fileSizeInBytes = 2000000
//   const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
//   let date = new Date().toLocaleDateString();
//   console.log(date + " : " + speed.mbps + " mbps");
// }

setInterval(function() {
    getNetworkDownloadSpeed();
}, 5000)