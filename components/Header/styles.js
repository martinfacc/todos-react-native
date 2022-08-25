import styled from 'styled-components'
import { colors } from '../styles'

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px; 
`

export const Button = styled.TouchableOpacity`
  padding: 5px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border: 2px solid ${colors.red3};
  border-radius: 10px;
`

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.red3};
  margin-left: 5px;
`


export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const HeaderButton = styled.TouchableOpacity`
`
