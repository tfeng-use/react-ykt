import React,{ PureComponent } from 'react'
// import { HomeWrapper } from './style'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import * as acionCreators from './store/actionCreators'
// import { Route, BrowserRouter, NavLink } from 'react-router-dom'

import { SideBarWrapper } from './style'
class SideBar extends PureComponent {
  render () {
    return (
      <SideBarWrapper style={this.props.styleProp}>
        {
          this.props.list.map((item) => {
            return (
              <div key={item.id} onClick={() => {this.props.handleBar(item.id)}} className={item.id===this.props.currentId?'current':''}>
                { item.name }
              </div>
            )
          })
        }
      </SideBarWrapper>
    )
  }
}
SideBar.defaultProps = {
  styleProp: {
    width: '9rem'
  },
  list: [
  ],
  currentId: '0',
  handleBar: function () {
    // console.log('侧边栏被点击了');
  }
}

SideBar.propTypes = {
  styleProp: PropTypes.object,
  list: PropTypes.array,
  currentId: PropTypes.string,
  handleBar: PropTypes.func
}

export default SideBar