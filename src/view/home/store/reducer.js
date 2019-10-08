import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

let defaultState = fromJS({
  CarouselList: [],
  recommendCourseList: [],
  recommendOrganList: [],
  newestCourseList: [],
  newestCoursePageNo: 1
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_CAROUSEL:
      return state.set('CarouselList', fromJS(action.value));
    case actionTypes.GET_RECOMMENDCOURSE:
      return state.set('recommendCourseList', fromJS(action.value));
    case actionTypes.GET_RECOMMENDORGAN:
      return state.set('recommendOrganList', fromJS(action.value));
    case actionTypes.GET_NEWESTCOURSE:
      return state.merge({
        newestCourseList: state.get('newestCourseList').concat(fromJS(action.value)),
        newestCoursePageNo: action.pageNo
      })
    default:
      return state
  }
}

export default reducer