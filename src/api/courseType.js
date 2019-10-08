import request from '@/utils/request'

export function fetchCourseType (obj) {
  return request({
    url: '/courseType/getCourseTypeListForMobile',
    method: 'get',
  })
}
