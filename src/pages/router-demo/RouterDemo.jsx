import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import './RouterDemo.less';

class RouterDemo extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  };

  render () {
    const RouterPage1 = Loadable({
      loader: () => import('./components/router-page1/RouterPage1'),
      loading: () => '',
    });
    const RouterPage2 = Loadable({
      loader: () => import('./components/router-page2/RouterPage2'),
      loading: () => '',
    });

    return (
      <div>
        <Switch>
          <Route path={ `${ this.props.match.url }/page1` } component={ RouterPage1 } />
          <Route path={ `${ this.props.match.url }/page2` } component={ RouterPage2 } />
        </Switch>
      </div>
    )
  }
}

export default RouterDemo;
