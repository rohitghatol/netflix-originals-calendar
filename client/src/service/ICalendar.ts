export interface IMonth {
  year: number;
  month: number;
}

export interface ICalendar {
  /**
   * Provide Weekdays of Week
   */
  getWeekDays(): string[];
  /**
   * Provide Month Name against Month Number
   * @param month (1-12)
   * @return Month Name for given month
   */
  getMonth(month: number): string;
  /**
   * Provide Number of days in a month
   * @param month (1-12)
   * @param year e.g 2012
   * @return Number of day for given month
   */
  daysInMonth(month: number, year: number): number;

  /**
   * Provides first day in a month starting from Monday (1 is Monday, 2 is Tuesday, etc)
   * @param month (1-12)
   * @param year e.g 2012
   * @return First Day in a Week starting from Monday
   */
  firstDayInMonth(month: number, year: number): number;

  /**
   * @return Get Current Month Year Tuple
   */
  currentMonth(): IMonth;
  /**
   * Increment Month Year Tuple by 1 and return next Month Year Tuple
   * @param month
   * @param year
   * @return Get Next Month Year Tuple
   */
  nextMonth(month: number, year: number): IMonth;

  /**
   * Decrement Month Year Tuple by 1 and return previous Month Year Tuple
   * @param month
   * @param year
   * @return Get Previous Month Year Tuple
   */
  prevMonth(month: number, year: number): IMonth;
}
