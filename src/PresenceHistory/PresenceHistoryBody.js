import React, { Component } from 'react';
import './PresenceHistory.css';

class PresenceHistoryBody extends Component {
  render() {
    const {intervals} = this.props.data;
    return <tbody>
      <tr>
        <td className="lead"></td>
        {intervals.map((time, index) => <td key={index}></td>)}
      </tr>
    </tbody>
  }
}

export default PresenceHistoryBody;
