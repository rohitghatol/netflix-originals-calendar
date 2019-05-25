import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {ILaunch} from '../types';
import {calendar} from '../service';
import {Month} from './Month';

export interface IProps {
  match: any;
  history: any;
  location: any;
}

export interface IState {
  month: number;
  year: number;
}

const Calendar = (props: IProps) => {
  const [currentYear, setCurrentYear] = useState(calendar.currentMonth().year);
  const [currentMonth, setCurrentMonth] = useState(calendar.currentMonth().month);
  const [launches, setLaunches] = useState({});
  useEffect(() => {
    if (props.match && props.match.params && props.match.params.year && props.match.params.month) {
      setCurrentMonth(parseInt(props.match.params.month));
      setCurrentYear(parseInt(props.match.params.year));
    } else {
      const {month, year} = calendar.currentMonth();
      setCurrentMonth(month);
      setCurrentYear(year);
    }
  }, [props.match]);
  useEffect(() => {
    // console.log('Fetch Data');
    const fetchData = async () => {
      const response = await fetch(`/api/events`, { method: 'GET' });
      const json = await response.json();
      // FIXME - Since we are not really calling an api like /api/events/year/month
      // we are getting complete data.
      // The cost for filtering this list vs cost to create a map is almost the same
      // Ideally for an /api/events/:year/:month we would get much smaller set
      const launchMap = {};
      json.data.forEach( (event: ILaunch) => {
        const key = event.launch_date.substring(0, 10);
        if (!launchMap[key]) {
          launchMap[key] = [];
        }
        launchMap[key].push(event);
      });
      setLaunches(launchMap);
    };
    fetchData();
  }, [currentMonth, currentYear]);

  const {history} = props;
  const prev = () => {
    const {month, year} = calendar.prevMonth(currentMonth, currentYear);
    history.push(`/${year}/${month}`);
  };

  const next = () => {
    const {month, year} = calendar.nextMonth(currentMonth, currentYear);
    history.push(`/${year}/${month}`);
  };

  return <Month
    year={currentYear}
    month={currentMonth}
    launches={launches}
    next={next}
    prev={prev}
  />;
};


export const CalendarWithRouter = withRouter(Calendar);
