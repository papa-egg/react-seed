import React, { Component } from 'react';
import SetName from './components/set-name/SetName';
import GetName from './components/get-name/GetName';
import { userMsg } from '@/redux/user/reducer';
import './ReduxDemo.less';

class ReduxDemo extends Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
      <div>
        <SetName />
        <GetName />
      </div>
    )
  }
}

export default ReduxDemo;
