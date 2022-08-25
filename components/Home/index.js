import React from 'react'
import Header from '../Header'
import ListItems from '../ListItems'
import { TodosContextProvider } from '../../contexts/todosContext'
import { Home } from './styles'

const HomeComponent = () => {
	return (
		<Home>
			<TodosContextProvider>
				<Header />
				<ListItems />
			</TodosContextProvider>
		</Home>
	)
}

export default HomeComponent
