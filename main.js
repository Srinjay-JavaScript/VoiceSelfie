var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function takePhoto(){
  document.getElementById("textbox").innerHTML = "";
  recognition.start();


recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (document.getElementById("textbox").value == "take my selfie"){
      speak();
    }
    
  }
    }

   function speak(){
     var speaker = window.speechSynthesis;
    //  var content =  document.getElementById("textbox").value;
     var recording = new SpeechSynthesisUtterance("Taking your selfie in 5 seconds!");
     speaker.speak(recording);
     check();
   }
  Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 100
  });
 function check(){
   if (document.getElementById("textbox").value == "take my selfie"){
    Webcam.attach(document.getElementById("cameraLive"));
    setTimeout(5000, snap());
   }
 }
 function snap(){
   console.log("Inside snap now.")
   Webcam.snap(function(data_uri){
     console.log("Inside webcam");
         document.getElementById("PhotoShot").innerHTML = "<img id='imgUser' src='" + data_uri + "'>";
     console.log("<img id='imgUser' src='" + data_uri + "'>");
   });   
 }
      