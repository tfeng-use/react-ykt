import * as actionTypes from './actionTypes'
import { 
  fetchCarouselList,
 } from '@/api/home/carousel.js'

 import { 
  fetchRecommendCourse,
 } from '@/api/course.js'

 import { 
  fetchRecommendOrgan,
 } from '@/api/organ.js'
 

export const getCarousel = (value) => ({
  type: actionTypes.GET_CAROUSEL,
  value
})

export const getRecommendCourse = (value) => ({
  type: actionTypes.GET_RECOMMENDCOURSE,
  value
})

export const getRecommendOrgan = (value) => ({
  type: actionTypes.GET_RECOMMENDORGAN,
  value
})

export const getNewestCourse = (value, pageNo) => ({
  type: actionTypes.GET_NEWESTCOURSE,
  value,
  pageNo
})

export const getCarouselAction = () => {
  return (dispath) => {
    fetchCarouselList().then(res => {
      dispath(getCarousel(res.data.rows))
    })
  }
}

export const getRecommendCourseAction = () => {
  let obj = {
    isRecommend: 1,
    status: 1,
    pageSize: 5,
    pageNo: 1
  }
  return (dispath) => {
    fetchRecommendCourse(obj).then(res => {
      dispath(getRecommendCourse(res.data.rows))
    })
  }
}

export const getRecommendOrganAction = () => {
  let obj = {
    isRecommend: 1,
    pageSize: 5,
    pageNo: 1
  }
  return (dispath) => {
    fetchRecommendOrgan(obj).then(res => {
      dispath(getRecommendOrgan(res.data.rows))
    })
  }
}

export const getNewestCourseAction = (pageNo) => {
  let obj = {
    isRecommend: 0,
    status: 1,
    pageSize: 5,
    pageNo
  }
  return (dispath) => {
    fetchRecommendCourse(obj).then(res => {
      dispath(getNewestCourse(res.data.rows, pageNo))
    })
  }
}
