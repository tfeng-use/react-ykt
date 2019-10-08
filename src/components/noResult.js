import React,{ PureComponent } from 'react'
import PropTypes from 'prop-types'
import status from '../common/image/status.png'
// import { Button, WhiteSpace } from 'antd-mobile';
import { NoResultWrapper } from './style'

class NoResult extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      btnStyle: {
        textAlign: 'center',
        fontSize: '1.4rem',
        width: '16rem',
        margin: '2rem 0.2rem 1rem 0.2rem',
        color: '#666'
      }
    }
  }
  render () {
    return (
      <NoResultWrapper className="wrapper">
        <img src={status} style={this.props.imgProp} alt=""/>
        <p style={this.props.pProp}>{this.props.contentProp}</p>
        {
          this.props.isShowBtn?(
            <div className="btn-wrapper">
              <button style={{...this.state.btnStyle,...this.props.btnProp}}>立即登录</button>
            </div>):null
        }
      </NoResultWrapper>
    )
  }
}
NoResult.defaultProps = {
  wrapperProp: {
  },
  imgProp: {
  },
  pProp: {
  },
  btnProp: {
    textAlign: 'center',
    fontSize: '1.4rem',
    width: '16rem',
    marginTop: '2rem',
    marginBottom: '1rem',
    color: '#666'
  },
  contentProp: '暂无相关内容',
  isShowBtn: false
}
NoResult.propTypes = {
  wrapperProp: PropTypes.object,
  imgProp: PropTypes.object,
  pProp: PropTypes.object,
  contentProp: PropTypes.string,
  btnProp: PropTypes.object,
  isShowBtn: PropTypes.bool,
}

export default NoResult
