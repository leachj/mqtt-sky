var SkyPlusHD = require('../sky-plus-hd');
var mqtt = require('mqtt')


var skyFinder = new SkyPlusHD().find();

skyFinder.then(function(skyBox) {
   console.log("READY: "+skyBox.description);
   
	client = mqtt.createClient(1883, 'localhost');

	client.subscribe('sky-control');

	skyBox.on('stateChanged',function(playEvent) {
	
		client.publish('sky-status', JSON.stringify(playEvent));
   	});

	client.on('message', function (topic, message) {
  		console.log(message);
  		
  		if ( message == "pause" ){
  			skyBox.pause();
  		} else if ( message == "play" ){
  			skyBox.play();
  		} else {
  			skyBox.setChannel({number:parseInt(message)});
  		}
	});
   
});

skyFinder.fail(function(err) {
   console.log("Failed to find skybox, "+err);
});
