class Parser {
  static parsingMonthAndDay(monthAndDay) {
    const [month, day] = monthAndDay.split(',');
    return [month, day];
  }
}

export default Parser;
