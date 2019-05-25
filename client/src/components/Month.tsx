import React from 'react';
import _ from 'lodash';
import {calendar} from '../service';
import {Launch} from './Launch';


import './month.css';


export interface IProps {
  year: number;
  month: number;
  launches: any; // {[key: string]: ILaunch[]};
  prev: Function;
  next: Function;
}

export const Month = (props: IProps) => {
  const {month, year, prev, next, launches} = props;
  const weekdays = calendar.getWeekDays();
  const startIndex = calendar.firstDayInMonth(month, year);
  const totalDays = calendar.daysInMonth(month, year);
  const days = new Array(42).fill(null);
  let day = 1;
  for (let index = startIndex; index < totalDays + startIndex; index++) {
    days[index] = day++;
  }
  return (
    <div className='month'>

      <div className='navigation'>
        <div/>
        <div className='action' onClick={() => {
          prev();
        }}>&larr;</div>
        <div className='title'>{calendar.getMonth(month)} {year}</div>
        <div className='action' onClick={() => {
          next();
        }}>&rarr;</div>
        <div/>
      </div>

      <div className='weeks'>
        {weekdays.map(name => (<div key={name} className='weekDay'>{name}</div>))}
      </div>
      <div className='days'>
        {days.map((day, index) => {
            if (day) {
              const key = `${year}-${_.padStart(month.toString(), 2, '0')}-${_.padStart(day.toString(), 2, '0')}`;
              const launchesForDay = launches[key];
              return (
                <div key={index} className='day'>
                  <div>
                    {day}
                  </div>
                  {launchesForDay ?
                    <Launch day={day} launches={launchesForDay}/>
                    : null}
                </div>);
            }
            else {
              return (
                <div key={index} className='day'>
                    <div>
                      {day}
                    </div>
                </div>
              );
            }
        })}

      </div>
    </div>
  );
};
