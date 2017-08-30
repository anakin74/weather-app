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

console.log(argv.a);

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=ravelijn%202%20vijfhuizen',
  json: true
},(error, response, body) => {
  // console.log(`Address: ${body.results[0].formatted_address}`);
  // console.log(`GeoCode latitude: ${body.results[0].geometry.location.lat}`);
  // console.log(`GeoCode longtitude: ${body.results[0].geometry.location.lng}`);

});


//challenge, pull the address out of argv, encode it, and then inject it in the url
