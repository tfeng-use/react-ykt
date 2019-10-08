import React,{ PureComponent } from 'react'
import { HomeWrapper } from './style'
import { connect } from 'react-redux'
import { SearchBar } from 'antd-mobile'
import * as acionCreators from './store/actionCreators'
import BaseScroll from '@/components/baseScroll'
import HomeCarousel from './component/Carousel.js'
import HomeRecommendCourse from './component/recommendCourse.js'
import HomeRecommendOrgan from './component/recommendOrg.js'
import HomeNewestdCourse from './component/newestCourse.js'

class Home extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      imgHeight: 176,
      isShowLoding: false
    }
    this.isShowCarousel = this.isShowCarousel.bind(this);
    this.isShowRecommendCourse = this.isShowRecommendCourse.bind(this);
    this.isShowRecommendOrgan = this.isShowRecommendOrgan.bind(this);
    this.isShowNewestCourse = this.isShowNewestCourse.bind(this);
    this.scrollToEnd = this.scrollToEnd.bind(this);
    props.cacheLifecycles.didCache(this.componentDidCache)
    props.cacheLifecycles.didRecover(this.componentDidRecover)
  }

  // 使用react-router-cache-route时注入的生命周期
  componentDidCache = () => {
    // console.log('被保存时');
  }
  // 使用react-router-cache-route时注入的生命周期
  componentDidRecover = () => {
    // console.log('被恢复时');
    // 强制更新
    this.forceUpdate();
  }
  componentDidMount () {
    this.props.getCarouselList();
    this.props.getRecommendCourseList();
    this.props.getRecommendOrganList();
    this.props.getNewestCourseList(1);
    // if (this.props.CarouselList.toJS().length === 0) {
    //   this.props.getCarouselList();
    // }
    
    // if (this.props.recommendCourseList.toJS().length === 0) {
    //   this.props.getRecommendCourseList();
    // }

    // if (this.props.recommendOrganList.toJS().length === 0) {
    //   this.props.getRecommendOrganList();
    // }

    // if ( this.props.newestCourseList.toJS().length === 0) {
    //   this.props.getNewestCourseList(1);
    // }
  }
  componentDidUpdate () {
    this.scrollRef._refresh();
    this.scrollRef.hideLoading();
  }
  isShowCarousel () {
    if (this.props.CarouselList) {
      return (
        <HomeCarousel CarouselList={this.props.CarouselList.toJS()} ></HomeCarousel>
      )
    } else {
      return null
    }
  }
  isShowRecommendCourse () {
    if (this.props.recommendCourseList) {
      return (
        <HomeRecommendCourse recommendCourseList={this.props.recommendCourseList}></HomeRecommendCourse>
      )
    } else {
      return null
    }
  }
  isShowRecommendOrgan () {
    if (this.props.recommendOrganList) {
      return (
        <HomeRecommendOrgan recommendOrganList={this.props.recommendOrganList}></HomeRecommendOrgan>
      )
    } else {
      return null
    }
  }
  isShowNewestCourse () {
    if (this.props.newestCourseList) {
      return (
        <HomeNewestdCourse newestCourseList={this.props.newestCourseList}></HomeNewestdCourse>
      )
    } else {
      return null
    }
  }
  // 滚动到底部，这儿进行请求
  scrollToEnd () {
    let pageNoTemp = this.props.newestCoursePageNo;
    let pageNo = pageNoTemp + 1;
    this.props.getNewestCourseList(pageNo);
  }
  render () {
    return (
      <HomeWrapper className="home-wrapper">
        <div className="search-wrapper">
        <SearchBar
          placeholder="搜索"
          onSubmit={() => console.log('onSubmit')}
          onClear={() => console.log('onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          onChange={this.onChange}
          />
        </div>
        <BaseScroll className="scroll" 
          probeType={2}
          ref={scroll => (this.scrollRef = scroll)} 
          scrollToEnd={this.scrollToEnd}
          isShowLoading={true}
          pullUpLoad={{threshold: 0}}
          pullDownRefresh={{threshold: 50, stop: 0}}
          styleProp={{
            height: 'calc(100vh - 4.4rem)',
            overflow: 'hidden'
          }}
          >
          <div className="content-wrapper">
            { this.isShowCarousel() }
            { this.isShowRecommendCourse() }
            { this.isShowRecommendOrgan() }
            { this.isShowNewestCourse() }
          </div>
        </BaseScroll>
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  CarouselList: state.getIn(['home', 'CarouselList']),
  recommendCourseList: state.getIn(['home', 'recommendCourseList']),
  recommendOrganList: state.getIn(['home', 'recommendOrganList']),
  newestCourseList: state.getIn(['home', 'newestCourseList']),
  newestCoursePageNo: state.getIn(['home', 'newestCoursePageNo']),
})

const mapDispatch = (dispatch) => ({
  getCarouselList () {
    dispatch(acionCreators.getCarouselAction())
  },
  getRecommendCourseList () {
    dispatch(acionCreators.getRecommendCourseAction())
  },
  getRecommendOrganList () {
    dispatch(acionCreators.getRecommendOrganAction())
  },
  getNewestCourseList (pageNo) {
    dispatch(acionCreators.getNewestCourseAction(pageNo))
  }
})

export default connect(mapState, mapDispatch)(Home)