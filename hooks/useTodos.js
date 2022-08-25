import React from 'react'
import TodosContext from '../contexts/todosContext'



const useTodos = () => {
	const { todos, setTodos } = React.useContext(TodosContext)

	const addTodo = (todo) => {
		
		setTodos(prevTodos => {
			const maxId = prevTodos.reduce((max, todo) => Math.max(todo.id, max), 0)
			return [...prevTodos, {...todo, id: maxId + 1}]
		})
	}

	const updateTodo = (todo) => {
		setTodos(todos.map((t) => (t.id === todo.id ? todo : t)))
	}

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	return { todos, addTodo, updateTodo, removeTodo }
}

export default useTodos
