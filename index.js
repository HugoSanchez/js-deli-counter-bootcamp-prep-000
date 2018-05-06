var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  
  katzDeliLine.push(name);
  var position = parseInt(katzDeliLine.indexOf(name))
  
  return "Welcome," + name + ". You are number " + position + " in line.";
  
}