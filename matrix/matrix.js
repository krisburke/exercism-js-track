export class Matrix {
  constructor(matrixStr) {
    this.matrix = matrixStr
      .split("\n")
      .map(row => row.split(" ").map(num => parseInt(num)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((col, i) => this.matrix.map(row => row[i]));
  }
}
