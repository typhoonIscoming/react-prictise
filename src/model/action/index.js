

// 定义action常量
const ADD_TODO = 'ADD_TODO'
const CHANGESECOND = 'CHANGESECOND'
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
