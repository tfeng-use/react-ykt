import Loadable from 'react-loadable';
import React from 'react'
import Loading from '@/components/loading'

const LoadableComponent = Loadable({
  loader: () => import('./index'), // 指向异步加载的组件
  loading () {
    return <Loading></Loading>
  }, // 显示loading时的组件
});

// export default () => <LoadableComponent/>;

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}