$(document).ready(function(){
	var images = [
		"beach.png",
		"car.png",
		"boulevard.png",
		"fire.png",
		"room.png",
		"toronto.png",
		"tower.png",
	]
	var i = 0;
	$.get('./stats',function(data){
		var sex_goal = 2;
		var sleep_goal = 2;

		var sexprog = parseFloat(data.sex)*(100/sex_goal);
		var sleepprog = parseFloat(data.sleep)*(100/sleep_goal);

		var totalprog = (sexprog+sleepprog)/2;

		if (sexprog < 5) sexprog = 5;
		if (sleepprog < 5) sleepprog = 5;
		if (totalprog < 5) totalprog = 5;

		if (sexprog > 100) sexprog = 100;
		if (sleepprog > 100) sleepprog = 100;
		if (totalprog > 100) totalprog = 100;

		$('#sexcount').html(data.sex);
		$('#sleepcount').html(data.sleep);

		$('#sexbar').width(sexprog+"%");
		$('#sleepbar').width(sleepprog+"%");
		$('#totalbar').width(totalprog+"%");

		if(sexprog >= 80){
			$('#sexbar').parent().addClass('red');
			$('#totalbar').parent().addClass('red');
		} else if (sexprog >= 40){
			$('#sexbar').parent().addClass('orange');
			$('#totalbar').parent().addClass('orange');
		}

		if(sleepprog >= 40){
			$('#sleepbar').parent().addClass('red');
		}

		if(totalprog >= 60){
			$('#fire').show();
		}

		fadeout();
		changePhoto();
	});

	fadeout = function(){
		$('#warning').fadeOut('slow', fadein);
	};

	fadein = function(){
		$('#warning').fadeIn('slow', fadeout);
	}

	changePhoto = function(){
		setTimeout(function(){
			// var i = Math.floor(Math.random()*(images.length-1));
			i = (i + 1) % images.length;
			$("#photo").attr("src","image/photos/"+images[i]);
			changePhoto();
		}, 5000);
	}
})
