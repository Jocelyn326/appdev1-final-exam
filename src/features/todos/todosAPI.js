import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getTodosAPI = () => {
  return axios
    .get(`${API_URL}/todos?_limit=10`)
    .then(res => res.data);
};

export const addTodoAPI = (todo) => {
  return axios
    .post(`${API_URL}/todos`, todo)
    .then(res => res.data);
};

export const updateTodoAPI = (todo) => {
  return axios
    .put(`${API_URL}/todos/${todo.id}`, todo)
    .then(res => res.data);
};

export const deleteTodoAPI = (id) => {
  return axios
    .delete(`${API_URL}/todos/${id}`)
    .then(() => id);
};