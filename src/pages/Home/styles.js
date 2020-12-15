import styled from 'styled-components/native'

export const Container = styled.View`
width: 100%;
flex: 1;
background-color: #006766;
align-items: center;
justify-content: center;
`

export const Text = styled.Text`
color: #fff;
`

export const UserArea = styled.TouchableOpacity`
width: 95%;
height: 95px;
background-color:  #fff;
flex-direction: row;
justify-content: center;
margin: 5px;
border-radius: 10px;
align-self: center;
`

export const CardLeft = styled.View`
width: 30%;
height: 100%;
align-items: flex-start;
justify-content: center;

`
export const CardRight = styled.View`
width: 70%;
flex-direction: column;
justify-content:space-between;
align-items: flex-start;
padding: 7px 

`

export const ImageProfile = styled.Image`
width: 95px;
height: 95px;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
`

export const TextName = styled.Text`
color: #121212;
font-weight: bold;
font-size: 18px
`

export const TextFunction = styled.Text`
color: #121212;
font-size: 16px
`

export const TextLocal = styled.Text`
color: #929292;
font-size: 14px
`