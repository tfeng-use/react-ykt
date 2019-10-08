import React, { PureComponent } from 'react'
import { HomeNewestdCourseWrapper } from '../style.js'
import { Icon } from 'antd-mobile'
import { imgUrl } from '@/common/js/global.js'

class HomeNewestdCourse extends PureComponent {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    return (
      <HomeNewestdCourseWrapper>
        <div className="title">
          <span>最新课程 <Icon type="right" className="icon"></Icon></span>
        </div>
        <div className="list-wrapper">
          {
            this.props.newestCourseList.map(ele => {
              return (
                <div className="item border-bottom-1px" key={ele.get('id')}>
                  <div className="right">
                    <div className="img-wrapper">
                      <img src={imgUrl + ele.get('logoPath')} alt="云课堂"/>
                    </div>
                    <p>
                      <span>{ele.get('saleNum')}人订阅</span>                    
                    </p>
                  </div>
                  <p className="type-name">
                    <span>{ele.get('courseTypeName')}</span>
                  </p>
                  <p className="name">
                    {ele.get('name')}
                  </p>
                  <p className="introduce">
                    {ele.get('introduce')}
                  </p>
                  <p className="current-price">
                    {ele.get('currentPrice') === 0? '免费': '￥'+ ele.get('currentPrice')}
                  </p> 
                </div>
              )
            })
          }
        </div>
      </HomeNewestdCourseWrapper>
    )
  }
}
export default HomeNewestdCourse
