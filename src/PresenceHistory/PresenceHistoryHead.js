import React, { Component } from 'react';
import './PresenceHistory.css';

const getCellColor = (time) => {
  const arg = time * Math.PI / 24;
  const DAY = [255, 230, 120];
  const NIGHT = [25, 40, 160];
  const dayC = DAY.map(v => v * Math.sin(arg));
  const nightC = NIGHT.map(v => v * Math.abs(Math.cos(arg)));
  const red = Math.min(255, Math.floor(dayC[0] + nightC[0]));
  const green = Math.min(255, Math.floor(dayC[1] + nightC[1]));
  const blue = Math.min(255, Math.floor(dayC[2] + nightC[2]));
  const pad = (c) => c.length === 1 ? '0' + c : c;
  const color = '#' + 
    pad(red.toString(16)) + 
    pad(green.toString(16)) + 
    pad(blue.toString(16));
  return color;
};

class PresenceHistoryHead extends Component {
  render() {
    const {intervals} = this.props.data;
    const times = intervals.map(i => new Date(i));
    const dayArr = [{
      date: times[0],
      width: 0
    }];
    times.slice(0, -1).forEach((time, index) => {
      if(index !== 0 && time.getDay() !== times[index - 1].getDay()) {
        dayArr.push({
          date: time,
          width: 0
        });
      }
      dayArr[dayArr.length - 1].width++;
    });
    return <thead>
      <tr>
        <td className="lead"></td>
        {dayArr.map(({date, width}, index) => <td
          className="day"
          key={index}
          colSpan={width}
        >
          {date.toLocaleString('en-us', {  weekday: 'long' })}
        </td>)}
      </tr>
      <tr>
        <td className="lead"></td>
        {times.slice(0, -1).map((time, index) => <td
          className="time"
          key={index}
          style={{backgroundColor: getCellColor(time.getHours())}}
        ></td>)}
      </tr>
    </thead>
  }
}

export default PresenceHistoryHead;
