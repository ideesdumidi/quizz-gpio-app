// var GPIO = require('onoff').Gpio;
// var buttonYes = new GPIO(17, 'in', 'both'),
// buttonNo = new GPIO(18, 'in', 'both');
 
 
  var socket = require('socket.io-client')('http://localhost:1234', { query: "user=user1" });

function sendYes(err, state) {
	if (state == 1) {
		post(1);
	}
}

function sendNo(err, state) {
	if (state == 1) {
		post(2);
	}
}
function post(value) {
        console.log("CLIENT: post value");
	socket.emit("answer:add", value, function(err){
        console.log("CLIENT: value sent");
	});
}
 
// pass the callback function to the
// as the first argument to watch()
// buttonYes.watch(sendYes);
// buttonNo.watch(sendNo);
socket.on('connected', function() {
post(1);
});