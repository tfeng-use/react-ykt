import styled from 'styled-components'

export const MyCenterWrapper = styled.div`
  padding: 0 2rem;
  .content {
    padding-top: 5rem;
    header {
      position: relative;
      height: 17.5rem;
      &::after { 
        border-top: 1px solid #e6e6e6;
      }
      .top {
        height: 6rem;
        line-height: 6rem;
        img {
          float: left;
          vertical-align: middle;
          margin-right: 3rem;
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
        }
        .name {
          float: left;
          font-size: 2.5rem;
          color: #1b1b1b;
          font-weight: 700;
        }
        .icon {
          float: right;
          display: inline-block;
          line-height: 6rem;
          height: 6rem;
          font-size: 1rem;
          color: #999;
        }
      }
      .bottom {
        margin-top: 4rem;
        text-align: center;
        .iconfont {
          color: #1b1b1b;
          font-size: 2.2rem;
        }
        span {
          margin-top: 1.4rem;
          padding: 0.5rem 0;
          display: block;
        }
      }
    }
    .list {
      margin-top: 2.5rem;
      li {
        position: realtive;
        height: 6.5rem;
        padding-left: 1.5rem;
        line-height: 6.5rem;
        font-size: 1.6rem;
        color: #1b1b1b;
        &::after { 
          border-top: 1px solid #e6e6e6;
        }
        &.balance {
          span {
            float: right;
            color: #d7000f;
          }
        }
      }
    }
  }
`