const request = require('request');
var geocodeAddress = (addressQuery, callback) => {
  var encodedAddress = encodeURIComponent(addressQuery);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  },(error, response, body) => {

    if (error) {
      callback('Unable to connect to Google Servers');

    } else if (body.status === 'ZERO_RESULTS') {
      callback('Sorry, we were unable to find that address');

    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longtitude: body.results[0].geometry.location.lng
      });

      // console.log(`Address: ${body.results[0].formatted_address}`);
      // console.log(`GeoCode latitude: ${body.results[0].geometry.location.lat}`);
      // console.log(`GeoCode longtitude: ${body.results[0].geometry.location.lng}`);
      // console.log();
    }
  });


};

//export geocode function
module.exports.geocodeAddress =  geocodeAddress;
