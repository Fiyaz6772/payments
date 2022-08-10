import { StyleSheet } from 'react-native'

import { Theme } from '../../utils/Theme'

const styles = StyleSheet.create({
  logoView: {
    width: Theme.wp('40%'),
    height: Theme.hp('15%'),
    marginTop: Theme.hp('5%'),
    marginBottom: Theme.hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginText: {
    fontSize: Theme.rf(24),
    fontFamily: Theme.font.bold,
    color: Theme.color.primry,
    textAlign: 'center',
  },
  desc: {
    fontSize: Theme.rf(14),
    fontFamily: Theme.font.regular,
    color: Theme.color.text,
    textAlign: 'center',
    marginVertical: Theme.hp('1%'),
  },
  body: {
    marginTop: Theme.hp('5%'),
    paddingHorizontal: Theme.wp('7%'),
  },
  input: {
    width: Theme.wp('86%'),
    height: Theme.hp('6%'),
    borderWidth: 0.7,
    borderColor: Theme.color.helper,
    borderRadius: 18,
    fontSize: Theme.rf(16),
    fontFamily: Theme.font.regular,
    color: Theme.color.text,
    padding: 0,
    paddingLeft: Theme.wp('3%'),
  },
  passView: {
    width: Theme.wp('86%'),
    height: Theme.hp('6%'),
    borderWidth: 0.7,
    borderColor: Theme.color.helper,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.hp('1%'),
  },
  inputPass: {
    width: Theme.wp('74%'),
    height: Theme.hp('6%'),
    borderRadius: 18,
    fontSize: Theme.rf(16),
    fontFamily: Theme.font.regular,
    color: Theme.color.text,
    padding: 0,
    paddingLeft: Theme.wp('3%'),
  },
  iconView: {
    width: Theme.wp('12%'),
    height: Theme.hp('6%'),
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPass: {
    fontSize: Theme.rf(14),
    fontFamily: Theme.font.itlaic,
    color: Theme.color.error,
    textAlign: 'right',
  },
  button: {
    width: Theme.wp('86%'),
    height: Theme.hp('6%'),
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.color.primry,
    marginTop: Theme.hp('5%'),
  },
  label: {
    fontSize: Theme.rf(16),
    fontFamily: Theme.font.bold,
    color: Theme.color.white,
    marginLeft: Theme.wp('2%'),
  },
  noAccount: {
    fontSize: Theme.rf(14),
    fontFamily: Theme.font.regular,
    color: Theme.color.text,
    marginVertical: Theme.hp('3.5%'),
    textAlign: 'center',
  },
  create: {
    fontSize: Theme.rf(16),
    fontFamily: Theme.font.regular,
    color: Theme.color.tertiary,
    textDecorationLine: 'underline',
  },
  birthText: {
    fontSize: Theme.rf(16),
    fontFamily: Theme.font.regular,
    color: Theme.color.text,
    paddingLeft: Theme.wp('3%'),
  },
  containerStyle: {
    marginTop: Theme.hp('1%'),
    width: Theme.wp('86%'),
    borderWidth: 1,
    borderRadius: 18,
    borderColor: Theme.color.helper,
    height: Theme.hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainerStyle: {
    width: Theme.wp('80%'),
    height: Theme.hp('5.5%'),
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    padding: 0,
  },
  textInputStyle: {
    height: Theme.hp('5%'),
    padding: 0,
    fontSize: Theme.rf(16),
    fontFamily: Theme.font.regular,
    color: Theme.color.text,
  },
  codeTextStyle: {
    height: Theme.hp('5.5%'),
    paddingTop: Theme.hp('1%'),
    fontSize: Theme.rf(16),
    fontFamily: Theme.font.regular,
    color: Theme.color.text,
  },
  countryPickerButtonStyle: {
    height: Theme.hp('5.5%'),
    width: Theme.wp('20%'),
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  errorsText: {
    fontSize: Theme.rf(10),
    fontFamily: Theme.font.light,
    color: Theme.color.error,
  },
  radioText: {
    fontSize: Theme.rf(16),
    fontFamily: Theme.font.regular,
    color: Theme.color.text,
  },
})

export default styles