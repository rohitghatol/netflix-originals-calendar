import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Month} from '../components/Month';
import {calendar} from '../service';

export interface IProps {
  match: any;
  history: any;
  location: any;
}

export interface IState {
  month: number;
  year: number;
}
// FIXME - Deprecated in favour of Calendar Component which uses react hooks
class Calendar extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      year: 0,
      month: 0
    };
  }

  static getDerivedStateFromProps(props: IProps, state: IState) {
    if (props.match && props.match.params && props.match.params.year && props.match.params.month) {
      return {
        month: parseInt(props.match.params.month),
        year: parseInt(props.match.params.year)
      };
    }
    else {
      const {month, year} = calendar.currentMonth();
      return {
        month: month,
        year: year
      };
    }
  }

  prev() {
    const {month, year} = calendar.prevMonth(this.state.month, this.state.year);
    this.props.history.push(`/${year}/${month}`);
  }

  next() {
    const {month, year} = calendar.nextMonth(this.state.month, this.state.year);
    this.props.history.push(`/${year}/${month}`);
  }

  render() {

    const {year, month} = this.state;
    return <Month
              year={year}
              month={month}
              next={() => {
                this.next();
              }}
              prev={() => {
                this.prev();
              }}
              launches={[]}
          />;
  }
}

export const CalendarWithRouter = withRouter(Calendar);
