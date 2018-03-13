import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PresenceHistory.css';

class PresenceHistory extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  fetchData(guild) {
    fetch(`/api/guilds/${guild}/activity`).then(value => value.json()).then(data => {
      this.setState({ data });
    }).catch(e => console.error(e));
  }

  componentDidMount() {
    this.fetchData(this.props.guild);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {props, state} = this;
    return nextProps.guild !== props.guild || nextState.data !== state.data;
  }

  componentWillReceiveProps({guild}) {
    this.fetchData(guild);
    this.setState({
      data: null
    });
  }

  render() {
    const {data} = this.state;
    return data ? (
      <pre>{JSON.stringify(data, null, 4)}</pre>
    ) : <div>Loading</div>;
  }
}

PresenceHistory.propTypes = {
  guild: PropTypes.string.isRequired
}

export default PresenceHistory;
