import React, { Component } from 'react';

import PresenceHistoryHead from './PresenceHistoryHead';
import PresenceHistoryBody from './PresenceHistoryBody';

class PresenceHistoryTable extends Component {
  render() {
    const {data} = this.props;
    return <table>
      <PresenceHistoryHead data={data} />
      <PresenceHistoryBody data={data} />
    </table>
  }
}

export default PresenceHistoryTable;
