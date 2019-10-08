import request from '@/utils/request'

export function fetchOrganTypes () {
  return request({
    url: '/orgType/getOrgTypeListForMobile',
    method: 'get',
  })
}
