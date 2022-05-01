Webcam.set({
    width:300,
    height:300,
    image_format : 'png',
    png:90
});
camera=documnt.getElementById("camera");
Webcam.attach('#camera');

function Take_snapshot() {
    Webcam.snap(function(data_uri) {
       document.getElementById("result").innerHTML = '<img id"captured_image" scr="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);

classifier=ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/a5YyQMnw2/',modelLoaded);


function modelLoaded(){
   console.log('Model Loaded!')
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}