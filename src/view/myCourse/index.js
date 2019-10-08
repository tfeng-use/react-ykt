import React,{ PureComponent } from 'react'
// import { HomeWrapper } from './style'
import { connect } from 'react-redux'
// import * as acionCreators from './store/actionCreators'
// import BaseScroll from '@/components/baseScroll'
// import { Route, BrowserRouter, NavLink } from 'react-router-dom'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

import AllCourse from './component/allCourse'
import PayCourse from './component/payCourse'
import OpenCourse from './component/openCourse'
import CollectCourse from './component/collectCourse'

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

const tabs = [
  { title: '全部课程' },
  { title: '付费课' },
  { title: '公开课' },
  { title: '收藏' },
];

class MyCourse extends PureComponent {
  constructor (props) {
    super(props)
    this.handleTablClick = this.handleTablClick.bind(this);
  }
  handleTablClick (data, index) {
  }
  render () {
    return (
      <div className="mycourse-wrapper">
        <WhiteSpace />
        <StickyContainer>
          <Tabs tabs={tabs}
            swipeable={false}
            initalPage={'t2'}
            tabBarInactiveTextColor="#999"
            tabBarActiveTextColor="#1b1b1b"
            onTabClick={this.handleTablClick}
            renderTabBar={renderTabBar}
            tabBarUnderlineStyle={{background: '#66ccff', borderColor: '#66ccff'}}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%', backgroundColor: '#fff' }}>
              <AllCourse></AllCourse>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%', backgroundColor: '#fff' }}>
              <PayCourse></PayCourse>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%', backgroundColor: '#fff' }}>
              <OpenCourse></OpenCourse>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%', backgroundColor: '#fff' }}>
              <CollectCourse></CollectCourse>
            </div>
          </Tabs>
        </StickyContainer>
        <WhiteSpace />
      </div>
    )
  }
}

const mapState = (state) => ({
})

const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(MyCourse)