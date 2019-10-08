import request from '@/utils/request'

export function fetchRecommendOrgan (obj) {
  return request({
    url: '/Org/getOrgListByConditionForMobile',
    method: 'get',
    params: obj
  })
}
