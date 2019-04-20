//this gets answers from the db and checks the answers and highlights accordingly....

var inputResponse = {}
//getting the correct answers from the server by a simple ajax request....
$(document).ready(function(){
	console.log("yes");
	$.ajax({
		url: '/getAnswers.json',
		method: 'GET',
		type: 'json',
		success: function(response){
		//
		inputResponse=response;
		console.log(inputResponse);
		    // console.log(response);
		}
	});
});
//counts the current state of solutions i.e. the upto which column the user has given corrrect response.... 
flacount = 0;
var correctAnswers=[];
console.log(inputResponse);


function checkValue() {
	correctAnswers[0] = inputResponse['v0']
	correctAnswers[1] = inputResponse['v1']
	correctAnswers[2] = inputResponse['v2']
	correctAnswers[3] = inputResponse['v3']
	correctAnswers[4] = inputResponse['d0']
	correctAnswers[5] = inputResponse['d1']
	correctAnswers[6] = inputResponse['d2']
	correctAnswers[7] = inputResponse['d3']
	correctAnswers[8] = inputResponse['n0']
	correctAnswers[9] = inputResponse['n1']
	correctAnswers[10] = inputResponse['n2']
	correctAnswers[11] = inputResponse['n3']
	console.log(correctAnswers);
	console.log(inputResponse);
	uv0 = (document.getElementById('v0').value)
	uv1 = (document.getElementById('v1').value)
	uv2 = (document.getElementById('v2').value)
	uv3 = (document.getElementById('v3').value)
	console.log("type is...")
	console.log(typeof(uv0))	
	try {
		console.log("valur")
		console.log(parseFloat(uv0))
		if(uv0!=parseFloat(uv0) || uv1!=parseFloat(uv1) || uv2!=parseFloat(uv2) || uv3!=parseFloat(uv3))
			throw "Please input a number";
	} catch (error) {
		
		alert(error);
		return;

	}
	cv0 = correctAnswers[flacount];
	cv1 = correctAnswers[flacount+1];
	cv2 = correctAnswers[flacount+2];
	cv3 = correctAnswers[flacount+3];
	if(uv0!=cv0 || uv1!=cv1 || uv2!=cv2 || uv3!=cv3)
	{
		if(uv0!=cv0)
			document.getElementById('v0').style.background = "#ff3300";
		else
			document.getElementById('v0').style.background = "#00e600";

		if(uv1!=cv1)
			document.getElementById('v1').style.background = "#ff3300";
		else
			document.getElementById('v1').style.background = "#00e600";

		if(uv2!=cv2)
			document.getElementById('v2').style.background = "#ff3300";
		else
			document.getElementById('v2').style.background = "#00e600";

		if(uv3!=cv3)
			document.getElementById('v3').style.background = "#ff3300";
		else
			document.getElementById('v3').style.background = "#00e600";

		document.getElementById('checkresult').innerHTML = "Wrong Answer!";
		look0();
	}
	else
	{
		if(flacount<=8)
			document.getElementById('checkresult').innerHTML = 'Correct Answer! <br><br><button onclick="look2()">Go to next step</button>';
		else
			document.getElementById('checkresult').innerHTML = 'Correct Answer! <br><br><button onclick="look2()">View final table</button>';

		document.getElementById('showCA').innerHTML = '';

		document.getElementById('v0').style.background = "#00e600";
		document.getElementById('v1').style.background = "#00e600";
		document.getElementById('v2').style.background = "#00e600";
		document.getElementById('v3').style.background = "#00e600";
	}
}

function look0() {
	document.getElementById('showCA').innerHTML = '<br><br><button onclick="look1()">Show Answer</button>';

}

function look1() {
	document.getElementById('showCA').innerHTML = '<br><br><button onclick="look0()">Hide Answer</button> <br><br> ';
	for(var i=0; i<4; i++)	
		document.getElementById('showCA').innerHTML += correctAnswers[flacount+i] + '<br>';
}

function look2() {

	document.getElementById('checkresult').innerHTML = '';
	ccc = flacount/4 + 1;
	ccd = ccc+1;
	r0='r0c';
	r1='r1c';
	r2='r2c';
	r3='r3c';
	document.getElementById(r0+ccc).innerHTML = correctAnswers[flacount];
	document.getElementById(r1+ccc).innerHTML = correctAnswers[flacount+1];
	document.getElementById(r2+ccc).innerHTML = correctAnswers[flacount+2];
	document.getElementById(r3+ccc).innerHTML = correctAnswers[flacount+3];

	if(flacount!=8)
	{
		document.getElementById(r0+ccd).innerHTML = '<input type="text" name="v0" id="v0" onclick="change();" style="width:30px" align="center" value="0">';
		document.getElementById(r1+ccd).innerHTML = '<input type="text" name="v1" id="v1" onclick="change();" style="width:30px" align="center" value="0">';
		document.getElementById(r2+ccd).innerHTML = '<input type="text" name="v2" id="v2" onclick="change();" style="width:30px" align="center" value="0">';
		document.getElementById(r3+ccd).innerHTML = '<input type="text" name="v3" id="v3" onclick="change();" style="width:30px" align="center" value="0">';
	}
	else
	{
		document.getElementById('checkresult').innerHTML = 'POS tags for the words in the sentence are as following:<br>Book is verb<br>a is determiner<br>park is noun<br>';
		document.getElementById('valueCheckBox').innerHTML = '';
	}

	flacount+=4;

}
