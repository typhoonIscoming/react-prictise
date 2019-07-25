import {
    CHANGINGMESSAGELIST, CHANGEDMESSAGELIST, CHANGEfAILED, CHANGECOUNTER
} from '../ACTION_TYPES'

const initState = {
    list: [],
    title: '',
    status: 0,
    counter: 0,
}

export default (state = initState, action) => {
    const { type, payload } = action
    switch(type) {
        case CHANGINGMESSAGELIST:
            return { ...state, status: 1 }
        case CHANGEDMESSAGELIST:
            const store = { ...state, status: 2, list: Object.assign([], [{ ...payload }]) }
            return store
        case CHANGEfAILED:
            return { ...state, status: 0 }
        case CHANGECOUNTER:
            return { ...state, counter: payload }
        default:
            return { ...state }
    }
}