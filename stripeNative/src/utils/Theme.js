import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'

export const Theme = {
  color: {
    primry: '#92056e',
    secondary: '#8abe01',
    tertiary: '#0087f0',
    helper: '#ffb600',
    error: '#f71114',
    text: '#555',
    white: '#fff',
    black: '#000',
    grey: '#808080',
  },
  font: {
    light: 'Barlow-Light',
    itlaic: 'Barlow-LightItalic',
    regular: 'Barlow-Regular',
    bold: 'Barlow-Bold',
    medium: 'Barlow-Medium',
  },
  hp,
  wp,
  rf: RFValue,
}
