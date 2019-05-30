import { combineReducers, createStore } from 'redux'

import first from './first'
import second from './second'



const rootReducer = combineReducers({
    first,
    second
})

const store = createStore(rootReducer)
export default store