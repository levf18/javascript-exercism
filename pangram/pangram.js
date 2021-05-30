//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (word) => {
  if(word.length == 0){
    return false;
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let isPangram = true;
  alphabet.split('').map(letter => {
    if (!word.toLowerCase().includes(letter)) {
      isPangram = false;
    }
  })
  return isPangram;
};
