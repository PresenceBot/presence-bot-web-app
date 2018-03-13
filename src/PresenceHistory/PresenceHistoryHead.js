import React, { Component } from 'react';
import './PresenceHistory.css';

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
        {intervals.slice(0, -1).map((time, index) => <td key={index}></td>)}
      </tr>
      <tr>
        <td className="lead"></td>
        {dayArr.map(({date, width}, index) => <td key={index} colSpan={width}>
          {date.toLocaleString('en-us', {  weekday: 'long' })}
        </td>)}
      </tr>
      <tr>
        <td className="lead"></td>
        {intervals.slice(0, -1).map((time, index) => <td key={index}></td>)}
      </tr>
    </thead>
  }
}

export default PresenceHistoryHead;
