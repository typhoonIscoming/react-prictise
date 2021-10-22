import './public-path'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import './index.scss';
import store from './model/reducer'

import App from './App';

import * as serviceWorker from './serviceWorker';

const hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?611e7b78ba36a5de4d13f1098c6fcafd";
const s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);

function render() {
    ReactDOM.render((
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    ), document.getElementById('root'));
}
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

// store.subscribe(() => console.log('====', store.getState()))
if (module.hot) {
    module.hot.accept('./App', function() {
        render()
    });
}
// console.log('process', process.env.REACT_APP_ENV)

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
    console.log('react app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
    console.log('基座下发的能力：', props);

    // 可通过 props.getGlobalState() 获取基座下发的数据

    // props.setGlobalState({user: {name: ''}}) 改变全局的数据

    // props.onGlobalStateChange 监听全局数据的变化
    render();
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
    console.log('update props', props);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//  "proxy": "http://139.196.229.212:3080",

