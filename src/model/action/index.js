import { fetch } from 'cross-fetch'

import {
    ADD_TODO, CHANGESECOND, CHANGINGMESSAGELIST, CHANGEDMESSAGELIST, CHANGEfAILED
} from '../ACTION_TYPES'


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
        // dispatch({ type: CHANGINGMESSAGELIST })
        return fetch('/list').then(res => res.json()
            .then(result => {
                dispatch({ type: CHANGEDMESSAGELIST, payload: result })
            }, 
            err => {
                dispatch({ type: CHANGEfAILED, payload: err })
            })
        )
    }
}
