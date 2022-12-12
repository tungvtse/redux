

export const addTodo =(data) =>{
    return{
        type: 'todoList/addTodo',
        payload:data
    }
}

export const searchFilterChange = (text) =>{
    return{
        type:'filter/searchFilterChange',
        payload:text
    }
}

export const statusFilterChange = (status) =>{
    return {
        type:'filter/statusFilterChange',
        payload:status
    }
}

export const prioritiesFilterChange = (priority) =>{
    return{
        type:'filter/prioritiesFilterChange',
        payload:priority,
    }
}


