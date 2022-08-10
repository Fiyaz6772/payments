import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Modal from 'react-native-modal'
import LottieView from 'lottie-react-native'

import { Theme } from '../utils/Theme'

const FNLoader = ({ visible, label }) => {
  return (
    <Modal
      isVisible={visible}
      animationIn="bounceInRight"
      animationInTiming={1300}
    >
      <View style={styles.main}>
        <View style={styles.lottie}>
          <LottieView
            source={require('../assets/jsons/loading.json')}
            style={{ width: '100%', height: '100%' }}
            autoPlay
            loop
          />
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.24)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: Theme.wp('30%'),
    height: Theme.wp('30%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: Theme.color.secondary,
    fontSize: Theme.rf(20),
    fontFamily: Theme.font.light,
  },
})

export default FNLoader
