const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.a);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
},(error, response, body) => {

  if (error) {
    console.log();
    console.log('Unable to connect to Google Servers');
    console.log();
  } else if (body.status === 'ZERO_RESULTS') {
    console.log();
    console.log('Sorry, we were unable to find that address')
    console.log();
  } else if (body.status === 'OK') {
    console.log();
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`GeoCode latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`GeoCode longtitude: ${body.results[0].geometry.location.lng}`);
    console.log();
  }



});


//challenge, pull the address out of argv, encode it, and then inject it in the url
