// Controller.js
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Parser from '../utils/Parser.js';

class Controller {
  static async run() {
    const monthAndDay = await InputView.readMonthAndDay();
    const [month, day] = Parser.parsingMonthAndDay(monthAndDay);
    const normalDayWorkingList = await InputView.readNormalDayWorkingList();
    const holidayWorkingList = await InputView.readHolidayWorkingList();
  }
}

export default Controller;
