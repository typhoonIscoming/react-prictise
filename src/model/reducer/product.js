import * as types from '../ACTION_TYPES'

const initState = {
    list: [],
    status: 0,
}

export default (state = initState, action) => {
    const { type, payload } = action
    switch(type) {
        case types.GETENTRYLISTING:
            return { ...state, status: 1 }
        case types.GETENTRYLIST:
            return { ...state, status: 2, list: payload }
        case types.GETENTRYLISTFIALED:
            return { ...state, status: 3 }
        default:
            return { ...state }
    }
}