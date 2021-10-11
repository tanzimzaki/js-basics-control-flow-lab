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

function ternaryCheckCity(argument) {
  if(argument === 'NYC') {
    return 'Ok, sounds good.';
  }

  else {
    return 'No go.';
  }

  // return NYC ? 'Ok, sounds good.' : 'No go.' 
}

function withoutElse(argument) {
  if(argument === 'NYC') {
    return 'Ok, sounds good.';
  }

  return 'No go.';

  // return NYC ? 'Ok, sounds good.' : 'No go.' 
}

function switchOnCharmFromTip(message) {
  switch (message) {
    case 'if the tip is generous':
        return 'Thank you so much.';
    case 'if the tip is not generous':
        return "Thank you.";
    default: 'if anything else'
        return "Bye.";
  } 
}
