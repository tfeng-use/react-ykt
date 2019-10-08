import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css'
import './common/style/index.scss';
import '@/utils/timeFormat.js';

// 设置适配跨度
let width = document.documentElement.clientWidth;

let htmlDom = document.querySelector('html');
htmlDom.style.fontSize = 20 / 750 * width + 'px';

ReactDOM.render(<App />, document.getElementById('root'));
