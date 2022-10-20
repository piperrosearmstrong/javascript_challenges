const fizzBuzz = require('./fizzbuzz');

describe ('fizzBuzz', () => {
  it('returns Fizz for the number 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns Buzz for the number 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns the number 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  });

  it('returns FizzBuzz for 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});