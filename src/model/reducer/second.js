const initState = {
    name: '',
    age: '',
    address: '',
    information: '',

}


export default (state = initState, action) => {
    const { payload } = action
    switch(action.type) {
        case 'ADD': 
            return Object.assign({}, {...state}, {...payload})
        default:
            return state
    }
}