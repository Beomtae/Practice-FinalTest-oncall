import CalendarMonth from '../constants/CalendarConstants.js';
import Holiday from '../constants/Holiday.js';

class Calendar {
  constructor(month, day) {
    this.day = [];
    this.createCalendar(month);
    this.makeHoliday(day);
    console.log(this.day);
    this.makeSpecialHoliday(month);
    console.log(this.day);
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

  makeSpecialHoliday(month) {
    for (const key in Holiday) {
      if (month === key && this.day[Holiday[key] - 1] === 0) {
        this.day[Holiday[key] - 1] = 2;
      }
    }
    if (month === '10' && this.day[2] === 0) {
      this.day[2] = 2;
    }
    if (month === '10' && this.day[8] === 0) {
      this.day[8] = 2;
    }
  }
}

export default Calendar;
