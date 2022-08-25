import React from 'react'
import {
	Header,
	Button,
	HeaderView,
	HeaderTitle,
	HeaderButton,
} from './styles.js'
import { colors } from '../styles'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import useTodos from '../../hooks/useTodos.js'

const HeaderComponent = () => {
	const { addTodo } = useTodos()

	return (
		<Header>
			<HeaderView>
				<HeaderButton>
					<Entypo name="list" size={35} color={colors.red3} />
				</HeaderButton>
				<HeaderTitle>Todos</HeaderTitle>
			</HeaderView>
			<Button
				onPress={() =>
					addTodo({
						title: 'New todo',
						date: new Date().toLocaleDateString(),
					})
				}
			>
				<AntDesign name="pluscircle" size={24} color={colors.red3} />
			</Button>
		</Header>
	)
}

export default HeaderComponent
