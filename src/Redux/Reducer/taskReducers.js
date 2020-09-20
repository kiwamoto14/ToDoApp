import { addTask, deleteTask, completeTask } from './actions';

const initState = {
    tasks: [
        {id: 1, content: 'Example', completed: false}
    ]
}

const taskReducers = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_TASK': {
            let newTasks = [...state.tasks, {id: state.tasks.length + 1, content: action.content, completed: false}]
            return {
                ...state,
                tasks: newTasks
            };
        }
        case 'DELETE_TASK': {
            let newTasks = state.tasks.filter(task => {
                return task.id !== action.id
            });
            
            return {
                ...state,
                tasks: newTasks
            }
        }
        case 'COMPLETE_TASK': {
            let newTasks = state.tasks.map(task => {
                if (action.id === task.id) {
                  task.completed = !task.completed;
                } 
                return task
            });
          
            return {
                ...state,
                tasks: newTasks
            }
        }

        default:
            return state;
    }
}

export default taskReducers;