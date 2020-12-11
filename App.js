import React from 'react';
import Home from './src/pages/Home';
import Routes from './src/pages/routes';
import { NavigationContainer } from '@react-navigation/native'
export default function App() {

  return( 
    <NavigationContainer>
  <Routes/>
  </NavigationContainer>
  )
}
