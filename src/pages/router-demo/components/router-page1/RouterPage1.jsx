import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RouterPage1.less';

class RouterPage1 extends Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
      <div>
        <p>This is page1</p>
        link to <Link to="/router-demo/page2" className="link">page2</Link>
      </div>
    )
  }
}

export default RouterPage1;
