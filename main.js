function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9EQ7pMKpF/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    console.log("gotResults")
}