function scuberGreetingForFeet(distanceTraveled){
  if (distanceTraveled <= 400)
    return ('This one is on me!');
  else if (distanceTraveled > 2500)
    return ('No can do.');
  else if (distanceTraveled >= 2000)
   return ('I will gladly take your thirty bucks.');
  }

function ternaryCheckCity(destination){
  const properDestination = "NYC";
    return((destination == properDestination) ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tipGenerosity){
  switch (tipGenerosity) {
    case 'generous':
      return('Thank you so much.');
      break;
    case 'not as generous':
      return('Thank you.')
      break;
    case 'thanks for everything':
      return('Bye.');
  }
}