import React,{ PureComponent } from 'react'
// import { HomeWrapper } from './style'
import { connect } from 'react-redux'
// import * as acionCreators from './store/actionCreators'
import BaseScroll from '@/components/baseScroll'
// import { Route, BrowserRouter, NavLink } from 'react-router-dom'
// import { Tabs, WhiteSpace } from 'antd-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';
// import CourseClassify from './component/courseClassify'
// import OrganClassify from './component/organClassify'
// import RecommendBroad from './component/recommendBroad'
// import MyBroadcast from './component/myBroadcast'
import { Icon, Flex } from 'antd-mobile';
import { MyCenterWrapper } from './style'
import avatar from '@/common/image/avatar.png'
import { getToken } from "@/utils/auth"
import { imgUrl } from '@/common/js/global.js'

class MyCenter extends PureComponent {
  // constructor (props) {
  //   super(props)
  // }

  componentDidUpdate () {
    if (this.scroll) {
      this.scroll._refresh();
      this.scroll.hideLoading();
    }
  }
  render () {
    return (
      <MyCenterWrapper className="my-center">
        <BaseScroll 
          ref={scroll=>(this.scroll=scroll)} 
          styleProp={{
            height: 'calc(100vh - 4.4rem)',
            overflow: 'hidden'
          }}
        >
          <div className="content">
            <header className="border-bottom-1px">
              <div className="top">
                {
                  getToken()?<img src={imgUrl + this.props.userMsg.get('headerImgPath')} alt=""/>:<img src={avatar} alt=""/>
                }
                
                {
                  getToken()?<span className="name">{this.props.userMsg.get('nickName')} </span>:<span className="name">登录注册</span>
                }
                <Icon type="right" className="icon"></Icon>
              </div>
              <Flex className="bottom">
                <Flex.Item>
                  <i className="iconfont icon-order"></i>
                  <span>我的订单</span>
                </Flex.Item>

                <Flex.Item>
                  <i className="iconfont icon-jiangpai1"></i>
                  <span>我的认证</span>
                </Flex.Item>

                <Flex.Item>
                  <i className="iconfont icon-xingqu"></i>
                  <span>学习兴趣</span>
                </Flex.Item>

                <Flex.Item>
                  <i className="iconfont icon-wechaticon16"></i>
                  <span>我的下载</span>
                </Flex.Item>
              </Flex>
            </header>
            <ul className="list">
              <li className="border-bottom-1px balance">
                我的余额
                {
                  getToken()?<span>{this.props.userMsg.get('balance')}</span>:''
                }
              </li>
              <li className="border-bottom-1px">
                消息中心
              </li>
              <li className="border-bottom-1px">
                我的预约
              </li>
              <li className="border-bottom-1px">
                证书查询
              </li>
              <li className="border-bottom-1px">
                成长记录
              </li>
              <li className="border-bottom-1px">
                设置
              </li>
              <li className="border-bottom-1px">
                分享这个App
              </li>
            </ul>
          </div>
        </BaseScroll>
      </MyCenterWrapper>
    )
  }
}

const mapState = (state) => ({
  userMsg: state.getIn(['myCenter', 'userMsg'])
})

const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(MyCenter)