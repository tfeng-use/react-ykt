import React,{ PureComponent } from 'react'
import loading from '../common/image/loading.gif'
import { LoadingWrapper } from './style'

class Loading extends PureComponent {
  render () {
    return (
      <LoadingWrapper className="loading-wrapper">
        <img src={loading} alt=""/>
      </LoadingWrapper>
    )
  }
}

export default Loading