Pasoori="";
jalebibaby="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Pasoori = loadSound("music2.mp3");
    jalebibaby= loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}