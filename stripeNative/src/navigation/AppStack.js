import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register'
import Splash from '../screens/Splash/Splash'
import RegisterSuccess from '../screens/RegisterSuccess/RegisterSuccess'
import Home from '../screens/Home/Home'

const Stack = createNativeStackNavigator()

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccess}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  )
}
