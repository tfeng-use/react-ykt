import { combineReducers } from 'redux-immutable'
import homeReducer from '@/view/home/store/reducer.js'
import findReducer from '@/view/find/store/reducer.js'
import myCenterReducer from '@/view/myCenter/store/reducer.js'

export default combineReducers({
  home: homeReducer,
  find: findReducer,
  myCenter: myCenterReducer
})
