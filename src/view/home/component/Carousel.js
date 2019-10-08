import React,{ PureComponent } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import { imgUrl } from '@/common/js/global.js'

class HomeCarousel extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      imgHeight: 176,
    }
  }
  render () {
    return (
      <div style={{height: '17.6rem', width: '100%'}}>
        <WingBlank>
          <Carousel
            infinite
            autoplay
            cellSpacing={0}
            >
              {this.props.CarouselList.map(val => (
                <a
                  href="http://www.baidu.com"
                  key={val.id}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={imgUrl + val.imgUrl}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
            
                  />
                </a>
              ))}
            </Carousel>
        </WingBlank>
      </div>
    )
  }
}

export default HomeCarousel