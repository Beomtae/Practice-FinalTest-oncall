class Parser {
  static parsingMonthAndDay(monthAndDay) {
    const [month, day] = monthAndDay.split(',');
    return [month, day];
  }

  static parsingNormal(list) {
    const parseList = list.split(',');
    return parseList;
  }

  static parsingHoliday(list) {
    const parseList = list.split(',');
    return parseList;
  }
}

export default Parser;
