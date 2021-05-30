//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function countCoincidenses(letter, word){
  let count = 0;
  word.map(findLetter => {if(findLetter == letter) count++});
  return count;
}

export const isIsogram = (word) => {
  let newWord = word.toLowerCase().split('').filter(letter => letter != ' ' && letter != '-');
  let isIsogram = true;
  newWord.map(letter => {
    if(countCoincidenses(letter, newWord) > 1){
      isIsogram = false;
    }
  })

  return isIsogram;
};
