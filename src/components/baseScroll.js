import React,{ PureComponent } from 'react'
// import { connect } from 'react-redux'
import BScroll from 'better-scroll';
import PropTypes from 'prop-types'
import { Icon } from 'antd-mobile'
import { ScrollUpdate } from './style'

class BaseScroll extends PureComponent {
  constructor (props) {
    super(props)
    this.scroll = null;
    this._refresh = this._refresh.bind(this);
    this._initScroll = this._initScroll.bind(this);
    this._scrollToTop = this._scrollToTop.bind(this);
    this.getPullDown = this.getPullDown.bind(this);
    this.getPullUp = this.getPullUp.bind(this);
    this.state = {
      flag: false,
      pulldownMsg: '下拉可以刷新'
    }
    // this.scrollToEnd = this._scrollToEnd.bind(this);
  }
  componentDidMount () {
    this._initScroll();
    this._refresh();
    this._scrollToTop(); // 滚动到顶部
  }
  componentDidUpdate () {
    // console.log('这儿是更新');
    // this._refresh();
  }
  // _scrollToEnd () {
  //   console.log('这儿滑动到了底部');
  // }
  _refresh () {
    this.scroll && this.scroll.refresh()
  }
  _initScroll () {
    // console.log('这儿是scroll初始化');
    // console.log(this.wrapper);
    if (!this.wrapper) {
      return;
    }
    this.scroll = new BScroll(this.wrapper, {
      click: this.click,
      scrollY: this.props.scrollY,
      scrollX: this.props.scrollX,
      probeType: this.props.probeType,
      pullUpLoad: this.props.pullUpLoad, // 开启上拉加载
      pullDownRefresh: this.props.pullDownRefresh, // 开启下拉刷新
      useTransition: false // 防止iphone微信滑动卡顿
    });
    if (this.props.isShowLoading) {
      this.scroll.on('pullingUp', () => {
        // console.log('这儿是上拉加载');
        this.setState({
          ...this.state,
          flag: true,
        })
        this.props.scrollToEnd();
      })
      this.scroll.on('scroll',(pos)=>{
        console.log(pos.y)
        if(pos.y < 20){
          this.setState({
            pulldownMsg: '释放立即刷新'
          })
        } else {
          this.setState({
            pulldownMsg: '下拉可以刷新'
          })
        }
      });
      this.scroll.on('touchEnd',(pos) =>{  //上拉刷新
        console.log('这儿是手离开屏幕');
        // 当往下滑动的距离小于一半的时候，指定返回到需要显式的顶部
        if (pos.y > 20 && pos.y < 40) {
          this._scrollToTop();
        }
        // 此时应该显示loading，并向外部触发一个事件
        if (pos.y > 0 && pos.y < 20) {
          
        }
        // if(pos.y > 30){
        //     setTimeout(()=>{
        //         that.getData().then((res)=>{
        //             //刷新数据
        //             that.data = res;
        //             //恢复刷新提示文本值
        //             that.pulldownMsg = '下拉刷新'
        //             //刷新成功后提示
        //             that.refreshalert();
        //             //刷新列表后，重新计算滚动区域高度
        //             that.scroll.refresh();
        //         })
        //     },2000)
        // } 
        // else if(pos.y<(this.scroll.maxScrollY - 30)){   //下拉加载
        //   this.pullupMsg = '加载中。。。';
        //   setTimeout(()=>{
        //       that.getData().then((res)=>{
        //           //恢复文本值
        //           that.pullupMsg = '加载更多';
        //           that.data = this.data.concat(res);
        //           that.scroll.refresh();
        //       })
        //   },2000)
        // }
      })
    }
  }
  _scrollToTop () {
    if (this.props.isShowLoading) {
      this.wrapper.scrollTo(0, -40)
    } else {
      this.wrapper.scrollTo(0, 0)
    }
  }
  hideLoading () {
    this.setState({
      ...this.state,
      flag: false,
    })
    this.scroll.finishPullUp();
    this.scroll.finishPullDown();
  }
  // 下拉刷新
  getPullDown () {
    if (this.state.updateFlag) {
      return (
        <ScrollUpdate>
          <Icon type="loading"></Icon>
        </ScrollUpdate>
      )
    } else {
      return (
        <ScrollUpdate>
          <i className="iconfont icon-jiantou"></i>
          <div className="right">
            <p>{this.state.pulldownMsg}</p>
            <p className="time">最后更新时间：<time>今天 23:00</time></p>
          </div>
        </ScrollUpdate>
      )
    }
  }
  // 上拉加载
  getPullUp () {
    let obj = {
      textAlign: 'center',
      lineHeight: '4.5rem',
      height: '4.5rem',
      verticalAlign: 'middle',
    }
    let objActive = {
      boxSizing: 'content-box',
    }
    if (this.state.flag) {
      return (
        <div className="icon-wrapper" style={{...obj, ...objActive}}>
          <Icon type="loading"></Icon>
        </div>
      )
    } else {
      return null
    }
  }
  static scrollToEnd () {
    // console.log('这儿滑动到了底部');
  }
  render () {
    // console.log('isShowLoading', this.props.isShowLoading);
    return (
      <div className="scroll-wrapper" ref={wrapper => this.wrapper = wrapper} style={this.props.styleProp}>
        {
          !this.props.isShowLoading?this.props.children:(
            <div>
              {/*
                this.getPullDown()
              */}
              {
                this.props.children
              }
              {
                this.getPullUp()
              }
            </div>
          )
        }
      </div>
    )
  }
}
BaseScroll.defaultProps = {
  click: true,
  scrollX: false,
  scrollY: true,
  probeType: 1,
  pullup: true,
  scrollToEnd: BaseScroll.scrollToEnd,
  styleProp: {
    height: '100vh',
    overflow: 'hidden'
  },
  isShowLoading: false,
  pullUpLoad: false,
  pullDownRefresh: false
}
BaseScroll.propTypes = {
  click: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  probeType: PropTypes.number,
  pullup: PropTypes.bool, // 上拉加载
  scrollToEnd: PropTypes.func,
  styleProp: PropTypes.object,
  isShowLoading: PropTypes.bool,
}
export default BaseScroll