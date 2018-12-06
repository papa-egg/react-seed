import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RouterPage2.less';

class RouterPage2 extends Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
      <div>
        <p>This is page2</p>
        link to <Link to="/router-demo/page1" className="link">page1</Link>
      </div>
    )
  }
}

export default RouterPage2;
