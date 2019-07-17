
const initState = {
  count: 0,
  list: [],
  item: '',
}




export default (state = initState, action) => {
    const { payload } = action

    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: payload }
      case 'DECREMENT':
        return state - 1
      case 'ADD_TODO':
        return { ...state, payload }
      default:
        return state
    }
  }