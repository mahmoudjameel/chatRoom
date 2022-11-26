LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyNavigation from './navigation'

export default function App() {
  return (
    <NavigationContainer>
        <MyNavigation />
    </NavigationContainer>
  )
}

