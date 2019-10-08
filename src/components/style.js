import styled from 'styled-components'

export const SideBarWrapper = styled.div`
  height: 100%;
  width: 9rem;
  background: #fafafa;
  color: #999;
  font-size: 1.2rem;
  div {
    height: 6rem;
    width: 9rem;
    color: #222;
    line-height: 6rem;
    text-align: center;
    &.current {
      border-left: solid 0.3rem #66ccff;
      background: #fff;
    }
  }
`

export const ScrollUpdate = styled.div`
  text-align: center;
  height: 4rem;
  color: #666;
  font-size: 1.2rem;
  .iconfont {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5rem;
    line-height: 4rem;
  }
  .right {
    vertical-align: middle;
    padding-top: 0.5rem;
    overflow: hidden;
    display: inline-block;
    .time {
      margin-top: 0.5rem;
    }
  }
`

export const LoadingWrapper = styled.div`
  width: 100%;
  margin-top: 14rem;
  text-align: center;
  img {
    line-height: 22em;
    width: 3rem;
    height: 3rem;
  }
`

export const NoResultWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 7rem;
  img {
    width: 16rem;
    height: 16rem;
  }
  p {
    margin-top: 2rem;
    line-height: 1.5em;
    color: #777;
  }
  .btn-wrapper {
    text-align: center;
    button {
      padding: 1.5rem 5rem;
      border: none;
      outline-style: none;
      border-radius: 1rem;
      font-size: 1.4rem;
      border: solid 1px #eee;
      background: #fff;
    }
  }
`