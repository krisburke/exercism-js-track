// Based on another user's solution after submitting my own.
// https://exercism.io/tracks/javascript/exercises/triangle/solutions/db8ba377c7ff4c109b0c7e6af739752e

const rules = [
  {
    rule: ({ a, b, c }) => a <= 0 || b <= 0 || c <= 0,
    type: () => {
      throw new Error("Triangle can't have negative or zero side");
    }
  },
  {
    rule: ({ a, b, c }) => a + b <= c || a + c <= b || b + c < a,
    type: () => {
      throw new Error("Triangle is impossible");
    }
  },
  {
    rule: ({ a, b, c }) => a === b && a === c,
    type: () => "equilateral"
  },
  {
    rule: ({ a, b, c }) => a === b || a === c || b === c,
    type: () => "isosceles"
  },
  {
    rule: ({ a, b, c }) => a !== b && a !== c && b !== c,
    type: () => "scalene"
  },
  {
    rule: () => true,
    type: () => {
      throw new Error("We're missing a rule");
    }
  }
];

export class Triangle {
  constructor(a, b, c) {
    this.sides = { a, b, c };
  }

  kind() {
    return rules.find(({ rule }) => rule(this.sides)).type();
  }
}
