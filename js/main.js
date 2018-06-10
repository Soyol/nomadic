var audio = new Audio('music/music.mp3');
var music = true;


$( document ).ready(function() {
	// audio.play();
});

$(".sound").click(function(){
	if(music){
		audio.pause();
		music = false;
		$(".bar").removeClass("anim-sound");
	}
	else{
		audio.play();	
		music = true;

		$(".bar").addClass("anim-sound");
	}
});
