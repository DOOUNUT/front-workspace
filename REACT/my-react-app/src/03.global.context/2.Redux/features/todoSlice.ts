import { createSlice } from "@reduxjs/toolkit";
import { initialState, type Todo } from "../type/todo";


const todolistSlice = createSlice({
    name : 'todolist',
    initialState  : initialState,
    reducers: {
        addTodos : (state,action) => {
            const newTodo:Todo = {
                id : Math.max(0,...state.todos.map(todo => todo.id)) +1,
                text : action.payload,
                completed :false
            };
            state.todos.push(newTodo);
        }
        
    }
})

export const {addTodos} = todolistSlice.actions;
export default todolistSlice.reducer