import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

let defaultState = fromJS({
  courseTypeList: [], // 所有的课程分类
  currentCourseType: [], // 当前二级课程分类
  currentCourseTypeId: '', // 当前一级课程类型Id
  organTypeList: [], // 所有的机构分类
  currentOrganTypeId: '',  // 当前机构分类Id
  currentOrgan: [], // 当前机构分类下面对应的机构
  organPageNo: 1, // 当前机构下面的页码
  broadcastList: [], // 直播列表
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_COURSETYPE:
      return state.merge({
        courseTypeList: fromJS(action.value),
        currentCourseType: fromJS(action.value[0].sonList),
        currentCourseTypeId: action.value[0].id
      })
    case actionTypes.GET_CURRENTCOURSETYPE:
      return state.set('currentCourseType', action.value)
    case actionTypes.GET_CURRENTCOURSEID:
      let arr = state.get('courseTypeList').toJS()
      let currentCourseTypeTemp = [];
      arr.every(ele => {
        // 为二级课程目录赋值
        if (ele.id === action.value) {
          currentCourseTypeTemp = fromJS(ele.sonList)
          return false
        }
        return true
      })
       return state.merge({
        currentCourseType: fromJS(currentCourseTypeTemp),
        currentCourseTypeId: action.value
      })
    // 机构类型列表
    case actionTypes.GET_ORGANTYPELIST:
      return state.merge({
        organTypeList: fromJS(action.value)
        // currentOrganTypeId: action.value.typeId,
      })
    // 当前机构类型下的机构
    case actionTypes.GET_CURRENTORGAN:
      return state.merge({
        currentOrgan: fromJS(action.value),
        currentOrganTypeId: action.typeId,
        organPageNo: action.pageNo
      })
    // 推荐直播
    case actionTypes.GET_BROADCASTLIST:
      let todayCourse = action.value.todayCourse || [];
      let futureCourse =  action.value.futureCourse || [];
      let arrCourse = todayCourse.concat(futureCourse);
      return state.set('broadcastList', fromJS(arrCourse));
    default:
      return state
  }
}

export default reducer