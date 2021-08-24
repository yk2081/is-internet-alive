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
var args = process.argv.slice(2);
const axios = require('axios');
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

console.log(args[0] + ", " + args[1]);
async function getNetworkDownloadSpeed() {
  //const baseUrl = 'http://cleoemr.com:9000/dummy_data';
  const baseUrl = 'https://s3.amazonaws.com/app.cleoemr.com/dummy';
  const fileSizeInBytes = 5000000;
  let date = new Date().toLocaleDateString() + "\t" + new Date().toLocaleTimeString();
  try {
    let speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    speed.location = args[0];
    console.log(date + "\t" + speed.mbps);
    //console.log(speed);

    if (speed.mbps < args[1])
        axios.post("https://metro-slack.glitch.me/internet-sos", speed)

  } catch (err) {
    console.log(date + "\t" + err.toString());
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

setInterval(async () => {
    await getNetworkDownloadSpeed();
}, 30000)