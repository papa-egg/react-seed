# React前端种子项目

------
---- 植根于内心的修养, 以约束为前提的自由

React + redux。 本项目主要提供一套基础、稳定的[React](https://react.docschina.org/docs/hello-world.html)项目架构和统一的代码风格；<br>
针对实际项目，提供一个完整清晰的React脉络，并在此基础上逐步完善；<br>
整体基于[Create React App](https://github.com/facebookincubator/create-react-app)，更多方法请参考[React官方文档](https://react.docschina.org/docs/hello-world.html)。

## 项目结构
创建之后，您的项目应该是这样：
```
react-seed/
  config
  public
  scripts
  src/
    assets/
    pages/
    redux/
    router/
    App.jsx
  .eslintrc
  .gitignore
  README.md
  package-lock.json
  package.json
```
整体文件操作都尽可能包含于src目录下，具体功能划分如下：
* `assets`公共资源，css，js，images等
* `pages`页面jsx模板文件，采用层层嵌套方式细化各模块
* `redux`全局的状态管理，并不提倡大范围使用，父子之间直接通信永远是最优选择
* `router`最外围路由配置
* `App.jsx`公共入口配置中心

## 代码风格
基本模板如下：
```js
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

```
采用es6编码风格，比起紧凑的代码书写，更提倡多运用空格和换行来让整体项目保持清晰，例：`{ this.state.name }`<br>
异步请求全局使用自定义ajax封装插件，方便针对项目进行自定义配置<br>
`'@/assets/js/ajax'`比起相对路径索引，提倡使用`@`进行绝对src路径定位，方便后续移动和修改
##路由
路由是单页面应用的核心，采用react-router4的路由配置方式，除此之外，针对主要模块进行按需加载（使用`react-loadable`）来优化整体加载效率
```js
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
```
更对react-router用法可以参考[react-router@4官方文档 ](https://reacttraining.com/react-router/web/example/basic)
## 组件结构
```
pages/
    components/
    router-demo/
        components/
            router-page1/
                RouterPage1.jsx
                RouterPage1.less
            router-page2/
                RouterPage2.jsx
                RouterPage2.less
        RouterDemo.jsx
        RouterDemo.less
```
整体组件采用由大到小，层层细化的组件嵌套方式进行构建（该结构针对大型项目固然不错，然而过犹不及，不建议嵌套过多层次造成难以理解的情况哦~）
##组件通信（redux）
组件之间通信可以说是核心难点，父子之间直接通信永远是最优先选择，例：`<LeftBar navList={ this.props.navList } />`<br>
对于极少部分没有明确的关联的数据，采用`redux`进行维护，仅做极少数据的状态管理，不提倡大规模的使用 ---- 游离于全局的变量无疑是危险的根源，不值得为贪图一时之快去大量使用

`redux`更详细demo请参考具体目录：
* `src/pages/redux-demo`
* `redux/`
## css规范
已采用less作为css预处理工具，完成样式设计之余也请做好类似组件模块的清晰划分<br>
less做预处理固然方便，然而不提倡进行过多的层级嵌套（最多不要超过三层），比如：
```
.leftbar{
    .leftbar-logo{
      .left-log-img{
        img{
            ...
        }
      }
    }
}

```
更提倡的方式为:
```
.leftbar{
    ...
}
.leftbar-logo{
    ...
}
.left-log-img{
    ...
}
.left-log-img img{
    ...
}
```
##编译命令
在项目中，可以运行:
### `npm start`
在开发模式下运行
打开http://localhost:80在浏览器中查看它（域名端口可在`config/webpack.config.dev.js`）中进行自定义配置<br>
如果您进行编辑，页面将重新加载
### `npm run build`
将用于生产的应用程序构建到“build”文件夹下<br>
对文件进行和代码混淆<br>
构建完成后，可进行部署，将视具体情况而定
