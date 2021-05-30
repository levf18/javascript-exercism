//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna_strand) => {
  if(dna_strand.length == 0){
    return '';
  }
  const dna_to_rna = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }
  
  return dna_strand.split('').map(dna => dna_to_rna[dna]).join('');
  
};
