import React, { Component } from 'react';
import './PresenceHistory.css';

const getCellColor = (online, idle, delta) => {
  const IDLE = [250, 166, 26];
  const ONLINE = [67, 181, 129];
  const BASE = [235, 235, 235];
  const idleC = IDLE.map(v => v * idle / delta);
  const onlineC = ONLINE.map(v => v * online / delta);
  const baseC = BASE.map(v => v * (delta - idle - online) / delta);
  const red = Math.floor(idleC[0] + onlineC[0] + baseC[0]);
  const green = Math.floor(idleC[1] + onlineC[1] + baseC[1]);
  const blue = Math.floor(idleC[2] + onlineC[2] + baseC[2]);
  const pad = (c) => c.length === 1 ? '0' + c : c;
  const color = '#' + 
    pad(red.toString(16)) + 
    pad(green.toString(16)) + 
    pad(blue.toString(16));
  return color;
};

class PresenceHistoryBody extends Component {
  render() {
    const {intervals, activity} = this.props.data;
    // Deltas may not be uniform (eg DST), so precompute them
    const deltas = intervals.slice(0, -1)
      .map((interval, index) => intervals[index + 1] - interval);
    return <tbody>
      {
        activity.map(({nick, activity}, index) => <tr className="user-activity" key={index}>
          <td className="lead">{nick}</td>
          {activity.map(({online, idle}, index) => <td
            className="time-slot" key={index}
            style={{backgroundColor: getCellColor(online, idle, deltas[index])}}
          ></td>)}
        </tr>)
      }
      <tr>
        {intervals.map((time, index) => <td key={index}></td>)}
      </tr>
    </tbody>
  }
}

export default PresenceHistoryBody;
