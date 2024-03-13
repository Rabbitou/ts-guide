import { multiply } from './multiply';

describe('multiply function', () => {
  it('multiplies two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('multiplies negative numbers correctly', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('multiplies zero correctly', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});