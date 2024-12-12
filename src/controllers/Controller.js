// Controller.js
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Parser from '../utils/Parser.js';
import ValidateMonth from '../models/validators/ValidateMonth.js';
import Calendar from '../models/Calendar.js';

class Controller {
  static async run() {
    try {
      const [month, day] = await this.monthInput();
      const calendar = new Calendar(month, day);
      const normalDayWorkingList = await InputView.readNormalDayWorkingList();
      const parsedNormalList = Parser.parsingNormal(normalDayWorkingList);
      const holidayWorkingList = await InputView.readHolidayWorkingList();
      const parsedHolidayList = Parser.parsingHoliday(holidayWorkingList);
      const result = Calendar.matchPeople(calendar.day, parsedNormalList, parsedHolidayList);
      console.log(result);
      console.log(calendar.day);
    } catch (error) {
      OutputView.print(error);
    }
  }

  static async monthInput() {
    while (true) {
      try {
        const monthAndDay = await InputView.readMonthAndDay();
        const [month, day] = Parser.parsingMonthAndDay(monthAndDay);
        ValidateMonth(month);
        return [month, day];
      } catch (error) {
        OutputView.print(error);
      }
    }
  }
}

export default Controller;

// 준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리
// 수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니
