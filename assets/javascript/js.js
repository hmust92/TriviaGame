//countdown starts from 60 seconds
var count = 60;


// the three variables below maintain the stats for the questions answered
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;



//entire game is in this function
$(document).ready(function(){

	



	// hide the game and end div and only display the starting container where you press start
	$("#game_container").hide();
	$("#end_container").hide();

	

	// really cool feature that sets your page scroll.
	window.scrollTo(0, 400);




	$("#starting_button").on("click", function(){

		// when you click the start button hide the start container
		$("#starting_container").hide();


		// and display the game container 
		$("#game_container").show();

		startCountdown(); // start the countdown when calling this function
		return;

	});



	// counting down the time and showing it to the user
	function countdown(){

		// count starts decreasing from 60 seconds
		count--;

		//display the count to the user as it keeps decreasing in 
    	$('#timer_number').html(count + " Seconds");

    	

    	
			// user clicks done
			$("#done_button").on("click", function(){

			//make count 0. 
			count = 0; 
			return;

			});


			// if count is 0, finish the game and hide the game div
			if(count == -1){

				// collect the inputs from Q/A
				finished();

				
				$("#game_container").hide();

			}


	}


	// function to show countdown
	function startCountdown(){

		//calls countdown function every 1 second
		setInterval(countdown, 1000);

	}


	// once timer is up, timeUp is called and tallies the stats for Q/A
	function finished(){


		// piece of code to get the value of a checked or selected radio button out of a group of radio buttons.
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();



		// determins the stats
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Manchester United"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Alan Shearer"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "653"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Gareth Barry"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "260"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "Ryan Giggs"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "162"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "Manchester United"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "Everton"){
			correctCount++;
		}
		else{
			wrongCount++;
		}



		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "Manchester United"){
			correctCount++;
		}
		else{
			wrongCount++;
		}




		// adds the stats up and displays it in the correct divs
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// now after everything is calculated, show end container. 
		$("#end_container").show();


		// really cool feature that sets your scroll
		window.scrollTo(0, 400);

	}

});

