import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id:1,
            text: "Hello World!"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Reducer containes properties and functions

        //Property
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // Filter returns true value
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer