import CalendarMonth from '../constants/CalendarConstants.js';

class Calendar {
  constructor(month, day) {
    this.day = [];
    this.createCalendar(month);
    this.makeHoliday(day);
  }

  createCalendar(month) {
    for (const key in CalendarMonth) {
      if (key === month) {
        this.day = new Array(CalendarMonth[key]).fill(0);
      }
    }
  }

  makeHoliday(day) {
    if (day === '월') {
      this.day.forEach((date, index) => {
        if (index % 7 === 5 || index % 7 === 6) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '화') {
      this.day.forEach((date, index) => {
        if (index % 7 === 4 || index % 7 === 5) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '수') {
      this.day.forEach((date, index) => {
        if (index % 7 === 3 || index % 7 === 4) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '목') {
      this.day.forEach((date, index) => {
        if (index % 7 === 2 || index % 7 === 3) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '금') {
      this.day.forEach((date, index) => {
        if (index % 7 === 1 || index % 7 === 2) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '토') {
      this.day.forEach((date, index) => {
        if (index % 7 === 0 || index % 7 === 1) {
          this.day[index] = 1;
        }
      });
    }
    if (day === '일') {
      this.day.forEach((date, index) => {
        if (index % 7 === 0 || index % 7 === 6) {
          this.day[index] = 1;
        }
      });
    }
  }
}

export default Calendar;
