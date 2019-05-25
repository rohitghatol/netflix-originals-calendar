import React, {useState} from 'react';
import {ILaunch} from '../types';
import './dialog.css';

export interface IProps {
  day: number;
  launches: ILaunch[];
}

export const Dialog = (props: IProps) => {
  const [open, setOpen] = useState(false);
  const {launches, day} = props;
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <a className='link' href='#' onClick={onClick}>...</a>
      <div className='cover' style={{display: open ? 'grid' : 'none'}} onClick={onClick}/>
      <div className='dialog' style={{display: open ? 'grid' : 'none'}}>
        <div className='header'>
          <div>Launches - {day}</div>
          <div className='button' onClick={() => {setOpen(false); }}>x</div>
        </div>
        <div className='content'>
          <div>
            {
              (launches || []).map( (launch: ILaunch) => ( <div key={launch.id} className='text'> {launch.title} </div> ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
