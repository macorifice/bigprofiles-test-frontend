import { Injectable } from '@angular/core';

@Injectable()
export class MathService {
  constructor() {}

  minimum = (values: number[]): number => {
    return Math.min(...values);
  };

  maximum = (values: number[]): number => {
    return Math.max(...values);
  };

  sum = (values: number[]): number => {
    return values.reduce((a, b) => a + b, 0);
  };

  average = (values: number[]): number => {
    return values.reduce((a, b) => a + b, 0) / values.length;
  };

  formatNumber(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      return '';
    }

    let noDecimalNumberFormatter = {
      format: val => {
        return Math.round(val) + '';
      },
    };

    let decimalNumberFormatter = {
      format: val => {
        return Math.round(val * 100) / 100 + '';
      },
    };

    let sigFig = 3;
    if (value >= 1000 && value < 10000) {
      sigFig = 5;
    } else if (value >= 10000 && value < 100000) {
      sigFig = 6;
    } else if (value >= 100000 && value < 1000000) {
      sigFig = 7;
    } else if (value >= 1000000) {
      sigFig = Math.round(value).toString().length;
    }

    if (typeof Intl === 'object' && typeof Intl.NumberFormat === 'function') {
      try {
        noDecimalNumberFormatter = new Intl.NumberFormat('IT', { style: 'decimal' });
        decimalNumberFormatter = new Intl.NumberFormat('IT', {
          maximumSignificantDigits: sigFig,
          minimumSignificantDigits: sigFig,
          style: 'decimal',
        });
      } catch (e) {
        // fallback to en-us
        noDecimalNumberFormatter = new Intl.NumberFormat('en-us', { style: 'decimal' });
        decimalNumberFormatter = new Intl.NumberFormat('en-us', {
          maximumSignificantDigits: sigFig,
          minimumSignificantDigits: sigFig,
          style: 'decimal',
        });
      }
    }

    if (value < 100 || value > -100) {
      return decimalNumberFormatter.format(value);
    }
    return noDecimalNumberFormatter.format(value);
  }
}
