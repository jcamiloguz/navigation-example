import { Text, View } from 'react-native'

import Create from './Auth/Create'
import { Login } from './Auth/Login'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const authNavigator = createNativeStackNavigator()
export  function User() {
  return (
  <authNavigator.Navigator >
    <authNavigator.Screen name="Login" component={Login} />
    <authNavigator.Screen name="Create" component={Create} />
  </authNavigator.Navigator>
  )
}