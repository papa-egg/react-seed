import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '@/redux/user/action';
import { Input, Button } from 'antd';
import './SetName.less';

class SetName extends Component {
  constructor (props) {
    super(props);
    this.state = {
      curName: '',
    }
  };

  inputHandle = (e) => {
    this.setState({ curName: e.target.value });
  };

  setName = () => {
    this.props.setName(this.state.curName);
  };

  render () {
    return (
     <div>
       <Input style={{ width: '200px', marginRight: '20px' }} placeholder="请输入" value={ this.state.curName } onChange={ this.inputHandle } />
       <Button style={{ marginTop: '20px' }} type="primary" onClick={ this.setName }>Click me</Button>
     </div>
    )
  }
}

export default connect(state => ({
  userMsg: state.userMsg,
}), {
  setName,
})(SetName)
