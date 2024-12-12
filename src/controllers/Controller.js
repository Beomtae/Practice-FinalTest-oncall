// Controller.js
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  static async run() {
    const monthAndDay = await InputView.readMonthAndDay();
    const normalDayWorkingList = await InputView.readNormalDayWorkingList();
    const holidayWorkingList = await InputView.readHolidayWorkingList();
  }
}

export default Controller;
