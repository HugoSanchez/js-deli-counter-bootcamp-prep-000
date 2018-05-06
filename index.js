var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome," + name + ". You are number " + katzDeliLine.indexOf(name)+1 + " in line.";
  
  //var position = katzDeli["name"] + 1
  //return "Welcome, ${name}. You are number ${position} in the line."
}