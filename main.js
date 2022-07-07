object = [];
status = "";

function preload(){
}

function setup(){
    canvas = createCanvas(360, 310);
    canvas.center();
    video = createVideo(VIDEO);
    video.size(360, 310);
    video.hide();
}

function draw(){
    image(video, 0, 0, 360, 310);
    if(status != "")
    {
      objectDector.detect(video, gotResult);
      for (i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML = "status : Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of object detected are : "+ object.lenght;
        fill("#FF0000");
        percent = floor(object[i].confidence * 100);
        text(object[i].label + "" + percent + "%",object[i].x + 15, object[i].y + 15);
        nofill();
        stroke("#FF0000");
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
      }
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting Objects";
    object_name = document.getElementById("object_name").value;
    if (object[i].label == object_name){
        document.getElementById("object_satus").innerHTML = object_name + " Found ";
    }
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}

function gotResult (error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results)
}