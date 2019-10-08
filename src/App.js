import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, NavLink } from 'react-router-dom'
// import { Link, Route, HashRouter } from 'react-keeper'
import { NavBar } from './style'
import Home from './view/home'
import Find from './view/find/loadable'
import MyCourse from './view/myCourse/loadable'
import MyCenter from './view/myCenter/loadable'
import CacheRoute from 'react-router-cache-route'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <CacheRoute cache path="/" exact component={Home} when="always"/>
            <CacheRoute cache path="/find" exact component={Find} when="always"/>
            <CacheRoute cache path="/myCourse" exact component={MyCourse} when="always"/>
            <CacheRoute cache path="/myCenter" exact component={MyCenter} when="always"/>
            <NavBar className="border-top-1px">
              <NavLink to="/" exact><i className="iconfont icon-shouye"></i>首页</NavLink>
              <NavLink to="/find"><i className="iconfont icon-faxian-"></i>发现</NavLink>
              <NavLink to="/myCourse"><i className="iconfont icon-kecheng"></i>课程</NavLink>
              <NavLink to="/myCenter"><i className="iconfont icon-Icon_wode"></i>我的</NavLink>
            </NavBar>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
