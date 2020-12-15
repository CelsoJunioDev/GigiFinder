import React from 'react';
import { StatusBar} from 'react-native'
import Home from './src/pages/Home';
import Routes from './src/pages/routes';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {

  return( 
    
    <NavigationContainer>
    <StatusBar backgroundColor='#006766' barStyle='default'/>
  <Routes/>
  </NavigationContainer>
  )
}
