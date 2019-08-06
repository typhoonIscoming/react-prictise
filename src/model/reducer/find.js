import { GETHISTORYTODAY, GETHISTORYTODAYSUCCESS, GETHISTORYTODAYFAILED } from '../ACTION_TYPES'

const initState = {
    result: [],
    status: null, // 请求数据是否成功。0 请求中，1 成功  2 失败
    error: '',
}

export default (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case GETHISTORYTODAYSUCCESS:
            return { ...initState, result: payload, status: 1 }
        case GETHISTORYTODAYFAILED:
            return { ...initState, status: 2, error: payload }
        case GETHISTORYTODAY:
            return { ...initState, status: 0 }
        default:
            return { ...initState }
    }
}