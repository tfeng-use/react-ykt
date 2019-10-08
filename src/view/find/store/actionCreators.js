import * as actionTypes from './actionTypes'
import { 
  fetchCourseType,
 } from '@/api/courseType.js'

import {
  fetchOrganTypes
} from '@/api/organType.js'

import {
  fetchRecommendOrgan
} from '@/api/organ.js'

import {
  fetchBroadcast
} from '@/api/broadcast.js'

// 课程分类
export const getCourseType = (value) => {
  return {
    type: actionTypes.GET_COURSETYPE,
    value: value
  }
}
export const getCourseTypeAction = () => {
  return (dispatch) => {
    fetchCourseType().then(res => {
      dispatch(getCourseType(res.data.rows))
    })
  }
}
export const getCurrentCourseTypeAction = (value) => {
  return {
    type: actionTypes.GET_CURRENTCOURSETYPE,
    value
  }
}
export const getCurrentCourseTypeIdAction = (value) => {
  // 当前一级课程id
  return {
    type: actionTypes.GET_CURRENTCOURSEID,
    value
  }
}

// 机构分类
export const getOrganType = (value) => {
  return {
    type: actionTypes.GET_ORGANTYPELIST,
    value,
    // typeId: value && value[0].id
  }
}
// 机构类别的action
export const getOrganTypeAction = () => {
  return (dispatch) => {
    fetchOrganTypes().then(res => {
      dispatch(getOrganType(res.data.rows));
      // 触发保存currentOrgan的action
      dispatch(getCurrentOrganTypeIdAction(res.data.rows[0] && res.data.rows[0].id, 1));
    })
  }
}
// 获取当前机构类别下的机构
export const getCurentOrganAction = (value, id, pageNo) => {
  return {
    type: actionTypes.GET_CURRENTORGAN,
    value,
    typeId: id,
    pageNo
  }
}
export const getCurrentOrganTypeIdAction = (id, pageNo) => {
  return (dispatch) => {
    let obj = {
      orgTypeId: id,
      pageSize: 9,
      pageNo: pageNo
    }
    fetchRecommendOrgan(obj).then(res => {
      dispatch(getCurentOrganAction(res.data.rows, id, pageNo))
    })
  }
}


// 推荐直播
export const getBroadcast = (value) => {
  return {
    type: actionTypes.GET_BROADCASTLIST,
    value
  }
}
export const getBroadcastAction = () => {
  return (dispatch) => {
    fetchBroadcast().then(res => {
      dispatch(getBroadcast(res.data))
    })
  }
}