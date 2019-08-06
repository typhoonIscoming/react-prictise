// dispatch一个action之后，到达reducer之前，进行一些额外的操作，就需要用到middleware
import { combineReducers, createStore, applyMiddleware } from 'redux'
// 这个中间件是在操作reducer时，会打印日志出来
// import { createLogger } from 'redux-logger'
// 这个中间件是支持异步action
import thunkMiddleware  from 'redux-thunk'

import first from './first'
import second from './second'
import message from './message'
import find from './find'

// const loggerMiddleware = createLogger()

const rootReducer = combineReducers({
    first,
    second,
    message,
    find,
})
// 在applyMiddleware中引入thunkMiddleware之后，我们就能使用异步的action了，即将接口的操作放在异步的action中，在页面
// 直接调用这个action函数即可，在异步的action中操作业务的reducer。
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store