import React,{ PureComponent } from 'react'
import { RecommendBroadWrapper, RecommendBroadItem } from '../style'
import BaseScroll from '@/components/baseScroll.js'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import { imgUrl } from '@/common/js/global.js'

class RecommendBroad extends PureComponent {
  constructor (props) {
    super(props)
    this.timeFormat = this.timeFormat.bind(this);
    this.getBroadcastList = this.getBroadcastList.bind(this);
  }
  componentDidMount () {
    this.props.getBroadcast();
  }
  componentDidUpdate () {
    if (this.scroll) {
      this.scroll._refresh();
      this.scroll.hideLoading();
    }
  }
  timeFormat (st, et) {
    // 由于ios的日期格式化的问题，必须将-转换为/，否则在ios端会被显示为NaN
    let startTime = new Date(st.replace(/-/g, '/')).format("yyyy年MM月dd日 HH:mm:ss")
    let endTime = new Date(et.replace(/-/g, '/')).format("yyyy年MM月dd日 HH:mm:ss")

    let final = startTime.slice(5, 17) + endTime.slice(12, 17)
    return final
  }
  getBroadcastList () {
    if ( this.props.broadcastList && this.props.broadcastList.toJS().length > 0) {
      return this.props.broadcastList.map(item => {
        return (
          <RecommendBroadItem key={item.get('id')}>
            <div className="left">
              <img src={imgUrl + item.get('courseImgPath')} alt=""/>
              <span className="teacher-name">{item.get('teacherName')}</span>
              <i className="iconfont icon-bookmark1"></i>
              <span className="status">{item.get('liveVideoStatus')===1?'未开始':(item.get('liveVideoStatus')===2?'进行中': '已结束')}</span>
            </div>
            <div className="right">
              <p className="name">
                {item.get('name')}
              </p>
              <div className="bottom">
                <span className="number">
                  {!item.get('currentPrice')?'免费':'￥'+item.get('currentPrice')}
                </span>
                <time>
                  <i className="iconfont icon-shijian"></i>
                  <span>
                    {
                      this.timeFormat(item.get('startTime'), item.get('endTime'))
                    }
                  </span>
                </time>
              </div>
            </div>
          </RecommendBroadItem>
        )
      })
    } else {
      return null
    }
  }

  render () {
    return (
      <RecommendBroadWrapper>
        {
          <BaseScroll
          ref={scroll => (this.scroll = scroll)}
            styleProp={{
              height: 'calc(100vh - 8.75rem)',
              overflow: 'hidden'
            }}>
            <div>
              {
                this.getBroadcastList()
              }
            </div>
          </BaseScroll>
        }
      </RecommendBroadWrapper>
    )
  }
}

const mapState = (state) => ({
  broadcastList: state.getIn(['find', 'broadcastList']),
})

const mapDispatch = (dispatch) => ({
  getBroadcast() {
    dispatch(actionCreators.getBroadcastAction())
  },
})

export default connect(mapState, mapDispatch)(RecommendBroad)