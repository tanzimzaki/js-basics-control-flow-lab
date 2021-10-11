function scuberGreetingForFeet(distance) {
  let result;
  if (distance <= 400) {
    result = 'This one is on me!';
    }
  else if (distance <= 2001) {
    result = 'I will gladly take your thirty bucks.';
    }
  else if (distance >= 2501) {
    result = 'No can do.';
    }
return result
}  

function trueChecker(argument) {
  return argument ? 'true' : 'false' 
}

function ternaryCheckCity(NYC) {
  if(NYC === 'NYC') {
    return 'Ok, sounds good.';
  }

  else {
    return 'No go.';
  }

  // return NYC ? 'Ok, sounds good.' : 'No go.' 
}

function switchOnCharmFromTip(message) {
  let answer;
  switch (message) {
    case 'if the tip is generous':
        answer = 'Thank you so much.';
        break;
    case 'if the tip is not generous':
        answer = "Thank you.";
        break;
    default: 'if anything else'
        console.log("Bye.");
        break;
  } 
}