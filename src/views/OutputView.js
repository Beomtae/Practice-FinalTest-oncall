import { Console } from '@woowacourse/mission-utils';
import Date from '../constants/Date.js';

class OutputView {
  static print(input) {
    Console.print(input);
  }

  static printResult(month, day, result, calendar) {
    calendar.forEach((date, index) => {
      Console.print(`${month}월 ${index + 1}일 ${Date[(day + index) % 7]} ${this.printSpecialHoliday(date)}${result[index]}`);
    });
  }

  static printSpecialHoliday(date) {
    const special = '(휴일)';
    if (date === 2) {
      return special;
    }
    return '';
  }
}

export default OutputView;
