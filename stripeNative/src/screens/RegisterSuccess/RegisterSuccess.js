import React from 'react'
import { View, Text } from 'react-native'

import LottieView from 'lottie-react-native'

import styles from './Style'

const RegisterSuccess = ({ navigation, route }) => {
  const { name } = route.params

  return (
    <View style={styles.main}>
      <Text style={styles.thanksText}>Welcome {name}.</Text>
      <View style={styles.lottieView}>
        <LottieView
          source={require('../../assets/jsons/success.json')}
          autoPlay
          loop={false}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <Text style={styles.thanksText}>
        You have successfully created your account.
      </Text>
      <Text
        style={styles.login}
        onPress={() => navigation.replace('Login')}
      >
        Login
      </Text>
    </View>
  )
}

export default RegisterSuccess
