//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, age_in_seconds) => {
  let ageInEarth = age_in_seconds / 31557600;

  switch (planet) {
    case 'earth':
      return +ageInEarth.toFixed(2);
      break;
    case 'mercury':
      return +(ageInEarth / 0.2408467).toFixed(2);
      break;
    case 'venus':
      return +(ageInEarth / 0.61519726).toFixed(2);
      break;
    case 'mars':
      return +(ageInEarth / 1.8808158).toFixed(2);
      break;
    case 'jupiter':
      return +(ageInEarth / 11.86261).toFixed(2);
      break;
    case 'saturn':
      return +(ageInEarth / 29.447498).toFixed(2);
      break;
    case 'uranus':
      return +(ageInEarth / 84.016846).toFixed(2);
      break;
    case 'neptune':
      return +(ageInEarth / 164.79132).toFixed(2);
      break;
  }
};
