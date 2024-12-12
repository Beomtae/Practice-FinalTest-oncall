import CalendarMonth from '../constants/CalendarConstants.js';
import Holiday from '../constants/Holiday.js';

class Calendar {
  constructor(month, day) {
    this.day = [];
    this.createCalendar(month);
    this.makeHoliday(day);
    this.makeSpecialHoliday(month);
    // console.log(this.day);
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

  static matchPeople(day, normal, holiday) {
    const result = [...day];
    let normalIndex = 0;
    let holidayIndex = 0;
    result.forEach((date, index) => {
      if (date === 0) {
        if (result[index - 1] === normal[normalIndex % normal.length]) {
          const temp = normal[normalIndex % normal.length];
          normal[normalIndex % normal.length] = normal[normalIndex + (1 % normal.length)];
          normal[normalIndex + (1 % normal.length)] = temp;
        }
        result[index] = normal[normalIndex % normal.length];
        normalIndex += 1;
      }
      if (date === 1 || date === 2) {
        if (result[index - 1] === holiday[holidayIndex % holiday.length]) {
          const temp = holiday[holidayIndex % holiday.length];
          holiday[holidayIndex % holiday.length] = holiday[holidayIndex + (1 % holiday.length)];
          holiday[holidayIndex + (1 % holiday.length)] = temp;
        }
        result[index] = holiday[holidayIndex % holiday.length];
        holidayIndex += 1;
      }
    });
    return result;
  }
}

export default Calendar;
