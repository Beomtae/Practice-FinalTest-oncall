import CalendarMonth from '../constants/CalendarConstants.js';

class Calendar {
  constructor(month) {
    this.day = [];
    this.createCalendar(month);
  }

  createCalendar(month) {
    for (const key in CalendarMonth) {
      if (key === month) {
        this.day = new Array(CalendarMonth[key]).fill(0);
      }
    }
    console.log(this.day);
  }
}

export default Calendar;
