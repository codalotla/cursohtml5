function capture(){
  var video = document.getElementById("video");

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  if (navigator.webkitGetUserMedia){
     navigator.webkitGetUserMedia({"video":true}, function(stream){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
     });
  }

  document.getElementById("capturar").addEventListener("click", function(){
    ctx.drawImage(video, 0, 0, 640, 480);
  })
}