const initState = {
    name: '',
    age: '',
    address: '',
    information: '',
    number: 0,
}


export default (state = initState, action) => {
    const { payload } = action
    switch(action.type) {
        case 'ADD': 
            return Object.assign({}, {...state}, {...payload})
        case 'CHANGESECOND':
            return Object.assign({}, {...state}, { number: payload })
        default:
            return state
    }
}