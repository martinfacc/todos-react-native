import React from 'react'
import useTodos from '../../hooks/useTodos.js'
import { Entypo } from '@expo/vector-icons'

import { Text } from 'react-native'
import {
	TodoText,
	TodoDate,
	UpdateButton,
	ListViewHidden,
	HiddenButton,
	ListView,
	TextView,
	SwipeListViewContainer,
} from './styles.js'
import { SwipeListView } from 'react-native-swipe-list-view'
import { colors } from '../styles'

const ListItems = () => {
	const { todos, updateTodo, removeTodo } = useTodos()

	return todos.length > 0 ? (
		<SwipeListViewContainer>
			<SwipeListView
				useFlatList
				data={todos || []}
				renderItem={({ item }) => (
					<ListView>
						<TextView>
							<TodoText>{item.title}</TodoText>
							<TodoDate>{item.date}</TodoDate>
						</TextView>
						<UpdateButton
							onPress={() =>
								updateTodo({ ...item, title: item.title + ' (updated)' })
							}
						>
							<Entypo name="pencil" size={24} color={colors.red3} />
						</UpdateButton>
					</ListView>
				)}
				renderHiddenItem={({ item }) => (
					<ListViewHidden>
						<HiddenButton onPress={() => removeTodo(item.id)}>
							<Entypo name="trash" size={24} color={colors.red3} />
						</HiddenButton>
					</ListViewHidden>
				)}
				leftOpenValue={80}
				previewRowKey={'1'}
				previewOpenValue={80}
				previewOpenDelay={3000}
				disableLeftSwipe={true}
				showsHorizontalScrollIndicator={false}
			/>
		</SwipeListViewContainer>
	) : (
		<Text>No todos</Text>
	)
}

export default ListItems
