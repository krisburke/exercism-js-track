/*
* Determine if a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has at least two sides the same length. (It is sometimes specified as
* having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)

A scalene triangle has all sides of different lengths.
*
* For a shape to be a triangle at all, all sides have to be of length > 0,
* and the sum of the lengths of any two sides must be greater than or equal
* to the length of the third side. See Triangle Inequality.
*
* */

export class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sides = [sideA, sideB, sideC];
  }

  violatesTriangleInequality() {
    return this.sides.some((side, idx, sides) => {
      const sumOfOtherSides = sides
        .filter((s, i) => i !== idx)
        .reduce((x, y) => x + y);

      if (sumOfOtherSides < side) {
        return true;
      }
    });
  }

  kind() {
    if (this.sides.some(side => side <= 0)) {
      throw new Error("All sides must be positive integers.");
    }

    if (this.violatesTriangleInequality()) {
      throw new Error("Violates triangle inequality.");
    }

    if (this.sides.every((side, i, sides) => side === sides[0])) {
      return "equilateral";
    }

    if (!this.sides.every((side, i, sides) => sides.indexOf(side) === i)) {
      return "isosceles";
    }

    return "scalene";
  }
}
