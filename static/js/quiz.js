// js file to post the answer on the server

$("#quiz-form").submit(function(){
	// console.log("woof");
	$.ajax({
		type: "POST",
		data: $("#quiz-form").serialize(),
		success: function()
		{
			window.alert("Quiz response submitted");
		}
	});
	return false;
});
