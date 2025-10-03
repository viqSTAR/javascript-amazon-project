import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: Running tests...');

console.log('Testing formatCurrency function');
if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('Testing formatCurrency function with 0');

if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('Testing formatCurrency function with rounding nearest cent');
if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}