import { StyleSheet } from 'react-native'

import { Theme } from '../../utils/Theme'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: Theme.color.white,
  },
  heading: {
    color: Theme.color.tertiary,
    fontSize: Theme.rf(16),
    fontFamily: Theme.font.bold,
  },
})

export default styles
