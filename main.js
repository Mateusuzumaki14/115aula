

function preload(){


}
function setup(){
  canvas=createCanvas(330,330 );
  canvas.center()
  video=createCapture(VIDEO);
  video.center()
  video.hide();

  posenet=ml5.poseNet(video,modelLoaded)
  posenet.on('pose',gotPoses) 
}

function modelLoaded(){
  console.log('modelo carregado')
}

function gotPoses(results){
if(results.length>0){
  console.log(results)
}
}

function draw(){
image(video,0,0,330,330)
}
