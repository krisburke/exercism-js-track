/*

Introduction
The Collatz Conjecture or 3x+1 problem can be summarized as follows:

Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

Given a number n, return the number of steps required to reach 1.

 */

const isEven = n => n % 2 === 0;

export const steps = (num, count = 0) => {
  if (num <= 0) {
    throw new Error("Only positive numbers are allowed");
  }

  if (num === 1) {
    return count;
  }

  return steps(isEven(num) ? num / 2 : 3 * num + 1, count + 1);
};
