import {formatCurrency} from '../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
  it('converts cents to formatted dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('formats 0 cents as 0.00', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds to nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  }); 
});