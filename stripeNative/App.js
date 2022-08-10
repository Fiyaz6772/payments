/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StripeProvider } from '@stripe/stripe-react-native'
import { NavigationContainer } from '@react-navigation/native'

import { STRIPE_KEY } from '@env'
import AppStack from './src/navigation/AppStack'

const App = () => {
  return (
    <StripeProvider publishableKey={STRIPE_KEY}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </StripeProvider>
  )
}

export default App

