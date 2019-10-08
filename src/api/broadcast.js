import request from '@/utils/request'

export function fetchBroadcast () {
  return request({
    url: '/liveVideo/liveVideoNotice',
    method: 'get'
  })
}
