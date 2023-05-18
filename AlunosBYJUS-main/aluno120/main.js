function preload(){

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",modelLoaded)

}
function modelLoaded() {console.log("modelLoaded")}
function draw() {
  
  image(video,0,0,300,300)
 classifier.classify(video,gotResult)
}
var previsao = ""
function gotResult(){
  if (results[0].confidence>0.5 && previsao != results[0].label) {
    previsao = results[0].label
    synth = window.speechSynthesis
    objeto = "O objeto de detectado é" + previsao
    falar = new SpeechSynthesisUtterance(objeto);
    synth.speak(falar)
    document.getElementById("nome").innerHTML = previsao
    document.getElementById("presicao").innerHTML = results[0].confidence
  }
}


