import styled from 'styled-components'

export const CourseClassifyWrapper = styled.div`
  display: flex;
  .course-classify-left {
    flex: 0 9rem;
  }
  .course-classify-right {
    flex: 1;
  }
`

export const CourseTypeItem = styled.div`
  box-sizing: border-box;
  margin: 0 2.5rem;
  width: 23.5rem;
  height: 7rem;
  line-height: 7rem;
  text-align: left;
  color: #333;
  font-size: 1.3rem;
  overflow: hidden;
  border-bottom: solid 1px #ebebeb;
  &.border-bottom-1px {
    &::after { 
      border-top-color: #ebebeb;
    }
  }
  .left {
    float: left;
  }
  .right {
    margin-right: 1rem;
    float: right;
    font-size: 1.3rem;
    color: #999;
  }
`

export const OrganClassifyWrapper = styled.div`
width: 100%;
display: flex;
.course-organ-left {
  flex: 0 9rem;
}
.organ-classify-right,.organ-no-result {
  overflow: hidden;
  flex: 1;
  margin-left: 2.5rem;
}
.organ-no-result {
  text-align: center;
  img {
    margin-top: 7rem;
    width: 12rem;
    height: 12rem;
  }
  p {
    margin-top: 2rem;
    line-height: 1.5em;
    color: #777;
    letter-spacing: 0.1em;
  }
}
`
export const OrganItem = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 2.5rem;
  height: 7rem;
  line-height: 7rem;
  img {
    float: left;
    margin-right: 1rem;
    border-radius: 0.4rem;
    width: 7rem;
    height: 7rem;
  }
  .right {
    float: left;
    .name {
      font-size: 1.4rem;
      color: #222;
      width: 16rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.5em;
    }
    .labels {
      margin-top: 0.9rem;
      line-height: 1.5em;
      font-size: 1.1rem;
      span {
        line-height: 1em;
        padding: 0.3rem 0.7rem;
        font-size: 1.1rem;
        color: #ccc;
        border: solid 1px #ccc;
        border-radius: 0.3rem;
        margin-right: 0.7rem;
        &:late-child {
          margin-right: 0;
        } 
      }
    }
  }

`
export const RecommendBroadWrapper = styled.div`{
  width: 100%;
}`

export const RecommendBroadItem = styled.div`
  height: 10.5rem;
  padding: 1.3rem 3rem 0 1.8rem;
  overflow: hidden;
  .left {
    float: left;
    position: relative;
    width: 13.3rem;
    height: 8rem;
    img {
      right: 0.75rem;
      width: 13.3rem;
      height: 8rem;
      border-radius: 0.5rem;
    }
    .teacher-name {
      position: absolute;
      border-radius: 0.2rem;
      right: 0.35rem;
      bottom: 0.2rem;
      font-size: 1rem;
      padding: 0.5rem 0.4rem;
      color: #fff;
      background: rgba(0, 0, 0, .5);
    }
    .iconfont {
      position: absolute;
      top: -0.9rem;
      left: 0.4rem;
      font-size: 4.25rem;
      color: #ff6f0a;
      transform: scaleX(1.2);
      -webkit-transform: scaleX(1.2);
      -moz-transform: scaleX(1.2);
      -o-transform: scaleX(1.2);
    }
    .status {
      position: absolute;
      top: 0.7rem;
      left: 0.5rem;
      color: #fff;
      font-size: 0.9rem;
    }
  }
  .right {
    height: 8rem;
    position: relative;
    margin-left: 14.05rem
    .name {
      font-size: 1.2rem;
      color: #333;
      line-height: 2em;
    }
    .bottom {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0.75rem;
      .number {
        float: left;
        color: #f33;
        font-size: 1.2rem;
      }
      time {
        float: right;
        color: #ccc;
        font-size: 1rem;
        .iconfont {
          margin-right: 0.1rem;
          font-size: 1.2rem;
        }
      }
    }
  }
`