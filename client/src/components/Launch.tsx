import React from 'react';
import {ILaunch} from '../types';

import './launch.css';
import {Dialog} from './Dialog';


export interface IProps {
  day: number;
  launches: ILaunch[];
}

export const Launch = (props: IProps) => {
  const {launches, day} = props;
  const visibleLaunches = launches.slice(0, 2);

  return (
    <div>
    {
      (visibleLaunches || []).map( (launch: ILaunch) => ( <div key={launch.id} className='truncate'> {launch.title} </div> ))
    }
    <Dialog day={day} launches={launches}/>
    </div>

  );
};
