import { fetch } from 'cross-fetch'

// 定义action常量
const ADD_TODO = 'ADD_TODO'
const CHANGESECOND = 'CHANGESECOND'
// import {
//     ADD_MESSAGES
// } from '../ACTION_TYPES'

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
        console.log('submit', submit)
        console.log('dispatch', dispatch)
        return fetch('/list').then(res => {
            console.log('res==', res)
        })
    }
}
