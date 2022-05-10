import { Button, Text, View } from 'react-native'

import React from 'react'

export  function Login({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={()=>navigation.navigate('Create') } />
    </View>
  )
}