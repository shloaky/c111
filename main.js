prediction_1 = "";
prediction_2 = "";
prediction_3 = "";
prediction_4 = "";
prediction_5 = "";
prediction_6 = "";

Webcam.set({
    width:350,
    height:300,
    Image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function takephoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="emoji_img" src="'+data_uri+'">';

    });
}
console.log('ml5 version: ',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models//model.json',modelloaded);
function modelloaded(){
    console.log('modelloaded');
};
function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "prediction 1  is"+prediction_1;
    speak_data2 = "prediction 2  is"+prediction_2;
    speak_data3 = "prediction 3  is"+prediction_3;
    speak_data4 = "prediction 4  is"+prediction_4;
    speak_data5 = "prediction 5  is"+prediction_5;
    speak_data6 = "prediction 6  is"+prediction_6;
    var utterthis = new SpeechSynthesisUtterance( speak_data1+ speak_data2+ speak_data3+ speak_data4+ speak_data5+ speak_data6);
    synth.speak(utterthis);
}