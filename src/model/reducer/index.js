
const initState = {
    count: 0,
    list: [],
    item: '',
}




export default (state = initState, action) => {
    const { payload } = action
    console.log('action', action)
    var arr = [2,3,4,4,5,2,3,6];
    var arr2 = arr.filter(function(element,index,self){
      return self.indexOf(element) === index;
    });
    console.log(arr2);



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