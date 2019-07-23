import {
    ADD_MESSAGES
} from '../ACTION_TYPES'

const initState = {
    list: [],
    title: '',
    status: 0,
}

export default (state = initState, action) => {
    const { type, payload } = action
    switch(type) {
        case ADD_MESSAGES:
            return { ...state, list: payload }
        default:
            return { ...state }
    }
}