// Controller.js
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Parser from '../utils/Parser.js';
import ValidateMonth from '../models/validators/ValidateMonth.js';

class Controller {
  static async run() {
    try {
      const [month, day] = await this.monthInput();
      console.log(month, day);
      //   const normalDayWorkingList = await InputView.readNormalDayWorkingList();
      //   const holidayWorkingList = await InputView.readHolidayWorkingList();
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
