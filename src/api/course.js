import request from '@/utils/request'

export function fetchRecommendCourse (obj) {
  return request({
    url: '/course/getCourseListByCondition',
    method: 'get',
    params: obj
  })
}
