import React, { Component } from 'react';
import ajax from '@/assets/js/ajax';
import './Home.less'

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  // get the user name
  getUserName = async () => {
    const { data } = await ajax('/xxxxxxxxx');

    this.setState({
      name: data.name,
    })
  };

  render () {
    return (
      <div>
        <p>{ this.state.name }</p>
        <button onClick={ this.getUserName }>点击获取用户名</button>
      </div>
    )
  }
}

export default Home;
