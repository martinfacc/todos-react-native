import React from 'react'

const TodosContext = React.createContext()

const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    date: '2020-01-01',
  },
  {
    id: 2,
    title: 'Todo 2',
    date: '2020-01-02',
  },
  {
    id: 3,
    title: 'Todo 3',
    date: '2020-01-03',
  },
  {
    id: 4,
    title: 'Todo 4',
    date: '2020-01-03',
  },
  {
    id: 5,
    title: 'Todo 5',
    date: '2020-01-03',
  },
  {
    id: 6,
    title: 'Todo 6',
    date: '2020-01-01',
  },
  {
    id: 7,
    title: 'Todo 7',
    date: '2020-01-02',
  },
  {
    id: 8,
    title: 'Todo 8',
    date: '2020-01-03',
  },
  {
    id: 9,
    title: 'Todo 9',
    date: '2020-01-03',
  },
  {
    id: 10,
    title: 'Todo 10',
    date: '2020-01-03',
  },
  {
    id: 11,
    title: 'Todo 11',
    date: '2020-01-01',
  },
  {
    id: 12,
    title: 'Todo 12',
    date: '2020-01-02',
  },
  {
    id: 13,
    title: 'Todo 13',
    date: '2020-01-03',
  },
  {
    id: 14,
    title: 'Todo 14',
    date: '2020-01-03',
  },
  {
    id: 15,
    title: 'Todo 15',
    date: '2020-01-03',
  },
  
]

export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = React.useState(initialTodos)
  
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContext