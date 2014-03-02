var audio_context;
var recorder;

function listen(){
	audio_context = new webkitAudioContext;
	navigator.webkitGetUserMedia({"audio":true}, function(stream){
		var audioinput = audio_context.createMediaStreamSource(stream);
		audioinput.connect(audio_context.destination);
		recorder = new Recorder(audioinput);
	});
}

$("#startrecord").on("click",function(){
	recorder.record();
	$(this).prop("disabled",true);
	$("#stoprecord").prop("disabled",false);
});

$("#stoprecord").on("click",function(){
	recorder.stop();
	$(this).prop("disabled",true);
	$("#startrecord").prop("disabled",false);
	sendaudioanddownload();
	recorder.clear();
});

function sendaudioanddownload(){
	console.log("im here");
	recorder.exportWAV(function(audiofile){
		var url = URL.createObjectURL(audiofile);
		$("body").append('<audio src="'+url+'" controls></audio><a download="myrecord.wav" href="'+url+'">Descargar</a>');
	});
}