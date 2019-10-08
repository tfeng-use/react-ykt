import styled from 'styled-components'

export const HomeWrapper = styled.div`
  height: 100%;
  touch-action: none;
  .search-wrapper {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
  }
  ul {
    overflow: hidden;
  }
  .li-item {
    width: 100px;
    height: 100px;
    margin-top: 30px;
    background: blue;
  }
`
let title = `
.title {
  overflow: hidden;
  padding-left: 2rem;
  height: 6rem;
  line-height: 6rem;
  font-weight: 400;
  font-size: 2rem;
  color: #1b1b1b;
  .icon {
    float: right;
    margin: 2.3rem 2rem 0 0;
    font-size: 1rem;
    color: #999;
  }
}`
export const HomeRecommendCourseWrapper = styled.div`
  ${title}
  .list-wrapper {
    height: 16.75rem;
    width: 82rem;
  }
  .course-item {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    margin-right: 2rem;
    width: 14rem;
    height: 16rem;
    box-shadow: 0 0.1rem 0.25rem #efefef;
    border-radius: 0.25rem;
    background: #fff;
    &:first-child {
      margin-left: 2rem;
    }
    img {
      width: 14rem;
      height: 8.5rem;
    }
    .course-name {
      max-height: 4.2rem;
      overflow: hidden;
      margin-top: 0.5rem;
      padding: 0 1rem;
      font-size: 1.4rem;
      color: #1b1b1b;
      letter-spacing: .05em;
      line-height: 1.5em;
    }
    .course-currentPrice {
      position: absolute;
      right: 1.1rem;
      bottom: 0.6rem;
      color: #ff3333;
      font-size: 1.5rem;
    }
  }
`

export const HomeRecommendOrganWrapper = styled.div`
  ${title}
  .list-wrapper {
    height: 25rem;
    width: 112rem;
  }
  .item {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-right: 2rem;
    width: 20rem;
    height: 24.5rem;
    box-shadow: 0 0.1rem 0.25rem #efefef;
    border-radius: 0.25rem;
    background: #fff;
    &:first-child {
      margin-left: 2rem;
    }
    .cover-img {
      display: block;
      width: 20rem;
      height: 10rem;
    }
    .header-img {
      position: absolute;
      top: 7rem;
      left: 50%;
      transform: translateX(-50%)
      -ms-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      text-align: center;
      box-shadow: 0 0.1rem 0.25rem #efefef;
      background: #fff;
      border: solid .5rem #fff;
    }
    .name {
      margin: 4rem 0 1rem 0;
      text-align: center;
      font-size: 1.6rem;
      font-weight: 700;
      color: #1b1b1b;
      letter-spacing: .05em;
      line-height: 1em;
    }
    .sign {
      padding: 0 0.5rem;
      line-height: 1.5em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .btn-wrapper {
      margin-top: 1.5rem;
      text-align: center;
      button {
        color: #333;
        outline-style: none;
        padding: 0.6rem 2.3rem;
        border-radius: 2.4rem;
        border: solid 1px #a2a2a2;
        background: #fff;
      }
    }
  }
`

export const HomeNewestdCourseWrapper = styled.div`
  ${title}
  .item {
    position: relative;
    overflow: hidden;
    margin: 0 2rem;
    background: #fff;
    .right {
      float: right;
      margin: 3.25rem 0 0 2rem;
      width: 9rem;
      .img-wrapper {
        width: 9rem;
        height: 9rem;
        border-radius: 0.5rem;
        text-align: center;
        overflow: hidden;
        img {
          height: 9rem;
        }
      }
      p {
        font-size: 1.1rem;
        color: #999;
        text-align: right;
        line-height: 3.2rem;
      }
    }
    .type-name {
      margin-top: 1.5rem;
      span {
        color: #fff;
        padding: 0.3rem 0.6rem;
        border-radius: 0.3rem;
        background: #bfd5f9;
      }
    }
    .name {
      margin: 1rem 0 0.5rem 0;
      width: 22.5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #1b1b1b;
      font-size: 1.5rem;
      line-height: 1.5em;
    }
    .introduce {
      font-size: 1.2rem;
      line-height: 2.2rem;
      color: #999;
    }
    .current-price {
      position: absolute;
      left: 0;
      bottom: 1rem;
      color: #f33;
      font-size: 1.5rem;
    }
  }
`