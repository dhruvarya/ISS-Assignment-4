
//implementing an ajax request to get the answers stored on the server

$(document).ready(function(){
    console.log("yes");
    $.ajax({
        url: '/getAnswers.json',
        method: 'GET',
        type: 'json',
        success: function(response){
		//
		    arr=response;
		    console.log(arr['v0']);
		    // console.log(response);
        }
    });
});

