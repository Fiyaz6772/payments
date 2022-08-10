import { StyleSheet } from 'react-native'

import { Theme } from '../../utils/Theme'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Theme.color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    width: Theme.wp('50%'),
    height: Theme.hp('25%'),
  },
  thanksText: {
    color: Theme.color.text,
    fontSize: Theme.rf(16),
    fontFamily: Theme.font.regular,
    textAlign: 'center',
    paddingHorizontal: Theme.wp('5%'),
    lineHeight: Theme.hp('2.9%'),
  },
  login: {
    color: Theme.color.tertiary,
    fontSize: Theme.rf(18),
    fontFamily: Theme.font.medium,
    textDecorationLine: 'underline',
    marginTop: Theme.hp('2%'),
  },
})

export default styles
