import {getDay, getDaysInMonth, getMonth, getYear, addMonths, subMonths} from 'date-fns';
import {ICalendar, IMonth} from './ICalendar';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


export class Calendar implements ICalendar {

  private validateMonth(month: number): void {
    if (month < 1 || month > 12) {
      throw new Error('Invalid Month provided');
    }
  }

  public daysInMonth(month: number, year: number): number {
    this.validateMonth(month);
    return getDaysInMonth(new Date(year, month - 1, 1));
  }

  public firstDayInMonth(month: number, year: number): number {
    this.validateMonth(month);
    return getDay(new Date(year, month - 1, 1));
  }

  public getMonth(month: number): string {
    this.validateMonth(month);
    return months[month - 1];
  }

  public getWeekDays(): string[] {
    return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  }

  public currentMonth(): IMonth {
    const now = new Date();
    return this.getMonthYear(now);
  }

  public nextMonth(month: number, year: number): IMonth {
    const nextMonth = addMonths(new Date(year, month - 1,  1), 1);
    return this.getMonthYear(nextMonth);
  }

  public prevMonth(month: number, year: number): IMonth {
    const prevMonth = subMonths(new Date(year, month - 1,  1), 1);
    return this.getMonthYear(prevMonth);
  }

  private getMonthYear(date: Date): IMonth {
    return {
      month: getMonth(date) + 1,
      year: getYear(date)
    };
  }

}
