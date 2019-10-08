import React, { PureComponent } from 'react'
import { HomeRecommendOrganWrapper } from '../style.js'
import { Icon } from 'antd-mobile'
import { imgUrl } from '@/common/js/global.js'
import BaseScroll from '@/components/baseScroll'

class HomeRecommendOrgan extends PureComponent {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    return (
      <HomeRecommendOrganWrapper>
        <div className="title">
          <span>推荐机构 <Icon type="right" className="icon"></Icon></span>
        </div>
        <BaseScroll scrollX={true} scrollY={false} styleProp={{width: '100%', overflow: 'hidden'}}>
          <div className="list-wrapper">
            {
              this.props.recommendOrganList.map(ele => {
                return (
                  <div className="item" key={ele.get('id')}>
                    <img className="cover-img" src={imgUrl + ele.get('orgCoverImgPath') } alt="云课堂"/>
                    <img className="header-img" src={imgUrl + ele.get('orgHeaderImgPath') } alt="云课堂"/>    
                    <p className="name">
                      {ele.get('orgName')}
                    </p>
                    <p className="sign">
                      {ele.get('orgSignature')}
                    </p>
                    <p className="btn-wrapper">
                      <button>更多</button>                    
                    </p>
                  </div>
                )
              })
            }
          </div>
        </BaseScroll>
      </HomeRecommendOrganWrapper>
    )
  }
}
export default HomeRecommendOrgan
