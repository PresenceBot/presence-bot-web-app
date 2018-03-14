import React, { Component } from 'react';
import './PresenceHistory.css';

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
          {activity.map(({online, idle}, index) => <td className="time-slot" key={index}>{
            (online / deltas[index]).toFixed(1)
          }</td>)}
        </tr>)
      }
      <tr>
        {intervals.map((time, index) => <td key={index}></td>)}
      </tr>
    </tbody>
  }
}

export default PresenceHistoryBody;
