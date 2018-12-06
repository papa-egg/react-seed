import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import Routers from './router'
import { Provider } from 'react-redux';
import store from './redux/store';
import { LocaleProvider } from 'antd';
import loadingTip from '@/assets/js/loading-tip'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import '@/assets/css/loading-tip.less';
import '@/assets/css/common.less';
import '@/assets/iconfont/iconfont.css';
import 'antd/dist/antd.less';

ReactDOM.render(
  <Provider store={ store }>
    <LocaleProvider locale={ zh_CN }>
      <Router>
        { Routers }
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);

loadingTip.getLoading();
