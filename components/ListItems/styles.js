import styled from 'styled-components'
import { colors } from '../styles'

export const SwipeListViewContainer = styled.View`
	width: 100%;
  overflow: scroll;
`

export const ListViewHidden = styled.View`
	margin: 10px;
	padding-left: 30px;
	height: 60px;
  border-radius: 10px;
	display: flex;
	justify-content: center;
	border: 2px solid ${colors.red2};
`

export const TextView = styled.View`
`

export const HiddenButton = styled.TouchableOpacity`
  color: ${colors.gray1};
`

export const TodoText = styled.Text`
	color: white;
`

export const TodoDate = styled.Text`
	color: ${colors.red7};
`

export const ListView = styled.View`
	margin: 10px;
	background-color: ${colors.red3};
	padding: 10px;
	border-radius: 10px;
  height: 60px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const UpdateButton = styled.TouchableOpacity`
	background-color: white;
	border-radius: 50px;
	padding: 5px;
`