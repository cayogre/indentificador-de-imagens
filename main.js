Webcam.set ({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})
camera = document.getElementById("camera")
Webcam.attach('#camera')
function take_a_photography() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="qualquer_um" src="' + data_uri + '">'
    })
}
console.log('ml5 version' , ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kjJMT4xvA/model.json', modelLoaded);
function modelLoaded(){
    console.log('eu tenho 800 reais')
}
function show_the_photography() {
    img = document.getElementById('qualquer_um')
    classifier.classify(img,pegarResultado)
}
function pegarResultado(error,results){
    if(error == true){
        console.log(error)
    }else{
        console.log(results)
        nome = results[0].label
        confidence = results[0].confidence
        document.getElementById('nome_objeto').innerHTML = nome
        document.getElementById('precisao_objeto').innerHTML = confidence
    }
}