import { fromJS } from 'immutable'
// import * as actionTypes from './actionTypes'

let defaultState = fromJS({
  userMsg: {}
})

const reducer = (state = defaultState, action) => {
  // switch (action.type) {
  //   case actionTypes.GET_ORGANTYPELIST:

  //   default:
  //     return state
  // }
  return state
}

export default reducer