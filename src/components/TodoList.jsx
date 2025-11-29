import { createSlice } from '@reduxjs/toolkit'

// Load initial state from localStorage
const loadState = () => {
  try {
    const savedTodos = localStorage.getItem('todos')
    const savedTheme = localStorage.getItem('savedTheme')
    return {
      todos: savedTodos ? JSON.parse(savedTodos) : [],
      theme: savedTheme || 'standard'
    }
  } catch (err) {
    return {
      todos: [],
      theme: 'standard'
    }
  }
}

const initialState = loadState()

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
      state.todos.push(newTodo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
        localStorage.setItem('todos', JSON.stringify(state.todos))
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    setTheme: (state, action) => {
      state.theme = action.payload
      localStorage.setItem('savedTheme', action.payload)
    }
  }
})

export const { addTodo, toggleTodo, deleteTodo, setTheme } = todoSlice.actions
export default todoSlice.reducer