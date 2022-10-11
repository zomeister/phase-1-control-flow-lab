function scuberGreetingForFeet(distanceFt){
  if (distanceFt <= 400) {
    return 'This one is on me!';
  } else if (distanceFt <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distanceFt <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  return (city === 'NYC') ? ('Ok, sounds good.') : ('No go.');
}

function switchOnCharmFromTip(tipQuality){
  switch (tipQuality) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';

  }
}