import { fetch } from 'cross-fetch'
import {
    ADD_TODO, CHANGESECOND, CHANGEDMESSAGELIST, CHANGEfAILED, CHANGECOUNTER,
} from '../ACTION_TYPES'

import * as types from '../ACTION_TYPES'

// 定义 接口接入第三方接口的数据
// 易源接口
// showapi_appid： 43725
// showapi_sign: b77090587b5b47359599d7b63b094f98
const appid = 43725, appsign = 'b77090587b5b47359599d7b63b094f98'




export const addTodo = (conf) => { // text是action的描述信息
    return {
        type: ADD_TODO,
        ...conf,
    }
}

export const changesecond = (conf) => ({
    type: CHANGESECOND,
    ...conf
})

export const changeMessage = (submit) => {
    return dispatch => {
        return fetch('/api/list').then(res => res.json()
            .then(result => {
                dispatch({ type: CHANGEDMESSAGELIST, payload: result })
            }, 
            err => {
                dispatch({ type: CHANGEfAILED, payload: err })
            })
        )
    }
}

export const changeCounter = (num = 1) => {
    return {
        type: CHANGECOUNTER,
        payload: num
    }
}

export const getLaugh = (data) => {
    return dispatch => {
        dispatch({ type: types.GETHISTORYTODAY })
        return fetch(`https://route.showapi.com/341-2?maxResult=1&page=1&showapi_appid=${appid}
            &showapi_sign=${appsign}&showapi_timestamp=${+new Date()}`)
            .then(res => res.json())
            .then(result => {
                console.log('result===', result)
                const { contentlist } = result.showapi_res_body
                dispatch({ type: types.GETHISTORYTODAYSUCCESS, payload: contentlist })
            })
    }
}

export const getHistory = () => {
    return dispatch => {
        dispatch({ type: types.GETHISTORYTODAY })
        return fetch(`https://route.showapi.com/119-42?showapi_appid=${appid}
            &showapi_sign=${appsign}&showapi_timestamp=${+new Date()}`)
            .then(res => res.json())
            .then(result => {
                console.log('result===', result)
                const { list } = result.showapi_res_body
                dispatch({ type: types.GETHISTORYTODAYSUCCESS, payload: list })
            })
    }
}
