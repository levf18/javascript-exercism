//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(stringMatrix) {
    this.matrix = [];
    let matrixByRow = stringMatrix.split('\n');
    matrixByRow.map(row => {
      this.matrix.push(row.split(' ').map(Number))
    })
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    let invMatrix = [];
    this.matrix.map((row, i) => {
      row.map((col, j) => {
        if(invMatrix[j]){
          invMatrix[j].push(col)
        }else{
          invMatrix.push([col])
        }
      })
    })
    return invMatrix;
  }
}
