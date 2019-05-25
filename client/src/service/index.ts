export * from './ICalendar';
export * from './Calendar';

import {Calendar} from './Calendar';
import {ICalendar} from './ICalendar';

export const calendar: ICalendar = new Calendar();
