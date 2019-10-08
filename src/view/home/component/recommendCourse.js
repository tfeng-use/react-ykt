import React, { PureComponent } from 'react'
import { HomeRecommendCourseWrapper } from '../style.js'
import { Icon } from 'antd-mobile'
import { imgUrl } from '@/common/js/global.js'
import BaseScroll from '@/components/baseScroll'

class HomeRecommendCourse extends PureComponent {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    return (
      <HomeRecommendCourseWrapper>
        <div className="title">
          <span>推荐课程 <Icon type="right" className="icon"></Icon></span>
        </div>
        <BaseScroll scrollX={true} scrollY={false} styleProp={{width: '100%', overflow: 'hidden'}}>
          <div className="list-wrapper">
            {
              this.props.recommendCourseList.map(ele => {
                return (
                  <div className="course-item" key={ele.get('id')}>
                    <img src={imgUrl + ele.get('logoPath')} alt="云课堂"/>
                    <p className="course-name">
                      {ele.get('name')}
                    </p>
                    <p className="course-currentPrice">
                      {ele.get('currentPrice') === 0? '免费': '￥'+ ele.get('currentPrice')}
                    </p> 
                  </div>
                )
              })
            }
          </div>
        </BaseScroll>
      </HomeRecommendCourseWrapper>
    )
  }
}
export default HomeRecommendCourse
