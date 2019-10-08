import React,{ PureComponent } from 'react'
// import PropTypes from 'prop-types'

// import Loading from '@/components/loading'
import NoResult from '@/components/noResult'
import { connect } from 'react-redux'
import { getToken } from "@/utils/auth"

class OpenCourse extends PureComponent {
  // constructor(props) {
  //   super(props)
  // }
  render () {
    return (
      <div className="wrapper" style={{width: '100%'}}>
        {
          getToken()?<div>这儿是我的公开课</div>:<NoResult isShowBtn contentProp="登录后可查看直播"></NoResult>
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  userMsg: state.getIn(['myCenter', 'userMsg']),
})

const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(OpenCourse)
