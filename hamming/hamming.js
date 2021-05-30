//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand_a, strand_b) => {
  
  if(strand_a.length == 0 && strand_b.length == 0){
    return 0;
  }

  if(strand_a.length == 0){
    throw Error('left strand must not be empty');
  }
  
  if(strand_b.length == 0){
    throw Error('right strand must not be empty');
  }
  
  if(strand_a.length != strand_b.length){
    throw Error('left and right strands must be of equal length');
  }

  let count = 0;
  strand_a.split('').map((letter, i) => {
    if(letter != strand_b[i]){
      count++
    }
  })

  return count;
};
