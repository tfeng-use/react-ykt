import React,{ PureComponent } from 'react'
import BaseScroll from '@/components/baseScroll.js'
import SideBar from '@/components/sideBar.js'
import { CourseClassifyWrapper, CourseTypeItem } from '../style.js'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import NoResult from '@/components/noResult'
// import status from '@/common/image/status.png'

class CourseClassify extends PureComponent {
  constructor (props) {
    super(props);
    this.getCourseTypeList = this.getCourseTypeList.bind(this);
    this.getCurrentCourseTypeList = this.getCurrentCourseTypeList.bind(this);
    this.state = {
      isRequest: false // 是否请求的标志位
    }
  }
  componentDidMount () {
    this.props.getCourseList();
  }

  componentDidUpdate () {
    this.setState({
      isRequest: true
    })
  }

  getCourseTypeList () {
    if (this.props.courseTypeList.toJS().length > 0) {
      return (
        <div className="course-classify-left">
          <BaseScroll styleProp={{
            height: 'calc(100vh - 8.75rem)',
            overflow: 'hidden'
          }}>
            <SideBar 
              list={this.props.courseTypeList.toJS()} 
              currentId={this.props.currentCourseTypeId} 
              handleBar={(id) => this.props.handleSetId(id)}>
            </SideBar>  
          </BaseScroll>
        </div>
      )
    } else {
      if (this.state.isRequest) {
        return <NoResult></NoResult>
      }
    }
  }

  getCurrentCourseTypeList () {
    if (this.props.currentCourseType.toJS().length > 0) {
      return (
        <div className="course-classify-right">
          <BaseScroll  styleProp={{
            height: 'calc(100vh - 8.75rem)',
            overflow: 'hidden'
          }}>
            {
              this.props.currentCourseType.map(item => {
                return (
                  <CourseTypeItem key={item.get('id')}>
                    <div className="left">{item.get('name')}</div>
                    <div className="right">{item.get('total')}</div>
                  </CourseTypeItem>
                )
              })
            }
          </BaseScroll>  
        </div>
      )
    } else {
      let wrapperProp = {
        width: '100%',
        textAlign: 'center',
        marginTop: '7rem',
        overflow: 'hidden',
        flex: 1,
      }
      let imgProp = {
        width: '16rem',
        height: '16rem',
      }
      if (this.state.isRequest) {
        return <NoResult wrapperProp={wrapperProp} imgProp={imgProp}></NoResult>
      }
    }
  }
  render () {
    return (
      <CourseClassifyWrapper>
        {this.getCourseTypeList()}
        {this.getCurrentCourseTypeList()}
      </CourseClassifyWrapper>
    )
  }
}
const mapState = (state) => ({
  courseTypeList: state.getIn(['find', 'courseTypeList']),
  currentCourseType: state.getIn(['find', 'currentCourseType']),
  currentCourseTypeId: state.getIn(['find', 'currentCourseTypeId']),
})

const mapDispatch = (dispatch) => ({
  handleSetId (id) {
    
    dispatch(actionCreators.getCurrentCourseTypeIdAction(id))
  },
  getCourseList () {
    dispatch(actionCreators.getCourseTypeAction())
  }
})

export default connect(mapState, mapDispatch)(CourseClassify)