import React, { useEffect } from 'react'
import { View } from 'react-native'

import LottieView from 'lottie-react-native'

import styles from './Style'
import { Theme } from '../../utils/Theme'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 100)
  })

  return (
    <View style={styles.main}>
      <LottieView
        source={require('../../assets/jsons/splash.json')}
        autoPlay
        style={{ flex: 1, height: Theme.hp('100%') }}
      />
    </View>
  )
}

export default Splash
