import styled from 'styled-components'
// 引入styled-components 使组件的样式只作用于自己

export const NavBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  height: 4.4rem;
  width: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, .9);
  a {
    flex: 1;
    text-align: center;
    color: #3e4956;
    font-size: 1.2rem;
    .iconfont {
      margin: 0.4rem 0;
      display: block;
      font-size: 2.1rem;
    }
    &.active {
      color: #fcfcfc;
      background: #3e4956;
    }
  }
`