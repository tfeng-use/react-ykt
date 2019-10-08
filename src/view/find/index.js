import React,{ PureComponent } from 'react'
// import { HomeWrapper } from './style'
import { connect } from 'react-redux'
// import * as acionCreators from './store/actionCreators'
// import BaseScroll from '@/components/baseScroll'
// import { Route, BrowserRouter, NavLink } from 'react-router-dom'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import CourseClassify from './component/courseClassify'
import OrganClassify from './component/organClassify'
import RecommendBroad from './component/recommendBroad'
import MyBroadcast from './component/myBroadcast'

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

const tabs = [
  { title: '课程分类' },
  { title: '机构分类' },
  { title: '推荐直播' },
  { title: '我的直播' },
];

class Find extends PureComponent {
  constructor (props) {
    super(props)
    this.handleTablClick = this.handleTablClick.bind(this);
  }
  handleTablClick (data, index) {
  }
  render () {
    return (
      <div className="find-wrapper">
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
              <CourseClassify></CourseClassify>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%', backgroundColor: '#fff' }}>
              <OrganClassify></OrganClassify>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%', backgroundColor: '#fff' }}>
              <RecommendBroad></RecommendBroad>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%', backgroundColor: '#fff' }}>
              <MyBroadcast></MyBroadcast>
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

export default connect(mapState, mapDispatch)(Find)