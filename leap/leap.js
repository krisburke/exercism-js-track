const isEvenlyDivisible = (dividend, divisor) => dividend % divisor === 0;

/* *
    Is a leap year...
    On every year that is evenly divisible by 4
    except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
* */

export const isLeap = year =>
  isEvenlyDivisible(year, 4)
    ? !(isEvenlyDivisible(year, 100) && !isEvenlyDivisible(year, 400))
    : false;
