Webcam.set({
    width:300,
    height:280,
    image_format:'png',
    png_quality:90,
    constraints: {
        facingMode:"environment"
    }
    
});


camera = document.getElementById("camera");

Webcam.attach('camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="captured_img" src='+ data_uri+'>';
        
    });
}

console.log("ml5 version" , ml5.version);
classifier = ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img , gotResult);

}

function gotResult(error , results){
 
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("name_of_object").innerHTML = results[0].label;
    }

}


