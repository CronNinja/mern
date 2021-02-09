function speak(message){
  var msg = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(msg);
}

export { speak }