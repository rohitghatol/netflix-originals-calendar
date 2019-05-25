import {calendar, IMonth} from '../../service';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const testData = [
  {month: 1, year: 2019, start: 2, days: 31 },
  {month: 2, year: 2019, start: 5, days: 28 },
  {month: 3, year: 2019, start: 5, days: 31 },
  {month: 4, year: 2019, start: 1, days: 30 },
  {month: 5, year: 2019, start: 3, days: 31 },
  {month: 6, year: 2019, start: 6, days: 30 },
  {month: 7, year: 2019, start: 1, days: 31 },
  {month: 8, year: 2019, start: 4, days: 31 },
  {month: 9, year: 2019, start: 0, days: 30 },
  {month: 10, year: 2019, start: 2, days: 31 },
  {month: 11, year: 2019, start: 5, days: 30 },
  {month: 12, year: 2019, start: 0, days: 31 },
  {month: 1, year: 2020, start: 3, days: 31 },
  {month: 2, year: 2020, start: 6, days: 29 },
  {month: 3, year: 2020, start: 0, days: 31 },
  {month: 4, year: 2020, start: 3, days: 30 },
  {month: 5, year: 2020, start: 5, days: 31 },
  {month: 6, year: 2020, start: 1, days: 30 },
  {month: 7, year: 2020, start: 3, days: 31 },
  {month: 8, year: 2020, start: 6, days: 31 },
  {month: 9, year: 2020, start: 2, days: 30 },
  {month: 10, year: 2020, start: 4, days: 31 },
  {month: 11, year: 2020, start: 0, days: 30 },
  {month: 12, year: 2020, start: 2, days: 31 },


];
describe('Calendar', () => {


  for (const entry of testData) {
    it(`Should return ${entry.days} for DaysInMonth for Month ${calendar.getMonth(entry.month)} ${entry.year}`, () => {
      expect(calendar.daysInMonth(entry.month, entry.year)).toEqual(entry.days);
    });
    it(`Should return ${entry.start} for firstDayInMonth for Month ${calendar.getMonth(entry.month)} ${entry.year}`, () => {
      expect(calendar.firstDayInMonth(entry.month, entry.year)).toEqual(entry.start);
    });
  }

  for (let month = 1; month <= 12; month++) {
    it(`Should return ${months[month]} for Month ${month}`, () => {
      expect(calendar.getMonth(month)).toEqual(months[month - 1]);
    });
  }

  it('Should return this month year for currentMonth', () => {
    const month: IMonth = calendar.currentMonth();
    const now = new Date();

    expect(month.month - 1).toEqual(now.getMonth());
    expect(month.year).toEqual(now.getFullYear());
  });

  it('Should return prev month year for prevMonth', () => {

    const month1: IMonth = calendar.prevMonth(1, 2019);
    expect(month1.month).toEqual(12);
    expect(month1.year).toEqual(2018);

    const month2: IMonth = calendar.prevMonth(2, 2019);
    expect(month2.month).toEqual(1);
    expect(month2.year).toEqual(2019);
  });

  it('Should return next month year for nextMonth', () => {

    const month1: IMonth = calendar.nextMonth(12, 2019);
    expect(month1.month).toEqual(1);
    expect(month1.year).toEqual(2020);

    const month2: IMonth = calendar.nextMonth(11, 2019);
    expect(month2.month).toEqual(12);
    expect(month2.year).toEqual(2019);
  });

});
