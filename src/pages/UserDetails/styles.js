import styled from 'styled-components/native'

export const Container = styled.View`
width: 100%;
align-items: center;
justify-content: center;
`
export const Header = styled.View`
width: 100%;
height: 230px;
background-color: #006766;
flex-direction: column;
justify-content: space-around;
padding: 10px;
align-items: center;
`

export const HeaderBack = styled.View`
flex-direction: row;
`
export const HeaderImageProfile = styled.Image`
width: 150px;
height: 150px;
border-radius: 200px;
`
export const HeaderTextName = styled.Text`
color: #fff;
font-weight: bold;
font-size: 25px;
`

export const HeaderTextLocal = styled.Text`
color: #fff;
font-size: 14px;
`

export const TextTitle = styled.Text`
color: #000;
font-size: 18px;
align-self: center;
font-weight: bold;
`
export const TextDescription = styled.Text`
color: #000;
font-size: 14px;
text-align: center;
`
export const InfoArea = styled.View`
width: 100%;
background-color: #fff;
justify-content: center;
margin: 5px;
align-items: center;
text-align: center;
`
export const Description = styled.View`
justify-content: center;
width: 90%;
height: 95px;
background-color: #e9e9e9;
margin: 5px;
padding: 15px;
border-radius: 10px;
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
padding: 7px; 

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
font-size: 18px;
`

export const TextFunction = styled.Text`
color: #121212;
font-size: 16px;
`

export const TextLocal = styled.Text`
color: #929292;
font-size: 14px
`