export const addTask = (content) => {
    return {
        type: 'ADD_TASK',
        content: content
    }
}

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id: id
    }
}

export const completeTask = (id) => {
    return {
        type: 'COMPLETE_TASK',
        id: id
    }
}