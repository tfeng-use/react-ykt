import request from '@/utils/request'

export function fetchCarouselList () {
  return request({
    url: '/banner/getBannerListForMobile',
    method: 'get',
  })
}
