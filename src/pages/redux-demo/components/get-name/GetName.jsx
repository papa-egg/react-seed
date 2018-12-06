import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GetName.less';

class GetName extends Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
      <p style={{ marginTop: '30px' }}>
        my name is { this.props.userMsg.name }
      </p>
    )
  }
}

export default connect(state => ({
  userMsg: state.userMsg,
}), {
})(GetName);
