// var GPIO = require('onoff').Gpio;
var request = require('request');
// var buttonYes = new GPIO(17, 'in', 'both'),
    // buttonNo = new GPIO(18, 'in', 'both');
 
function sendYes(err, state) {
  if(state == 1) {
    post(1);
  }
}

function sendNo(err, state) {
  if(state == 1) {
    post(2);
  }
}

function post(value){
	request.post(
		'http://localhost:9000/api/answers',
		{ answer: value },
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body)
			}else{
				console.log(error||response.statusCode);
			}
		}
	);
}
 
// pass the callback function to the
// as the first argument to watch()
// buttonYes.watch(sendYes);
// buttonNo.watch(sendNo);

post(1);