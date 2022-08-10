import { StyleSheet } from 'react-native'

import { Theme } from '../../utils/Theme'

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flex: 5,
    paddingHorizontal: Theme.wp('10%'),
    backgroundColor: 'rgba(108, 150, 35, 0.8)',
    margin: 5,
    borderRadius: 28,
  },
  body: {
    flex: 5,
    paddingHorizontal: Theme.wp('10%'),
  },
  heading: {
    color: Theme.color.primry,
    fontSize: Theme.rf(17),
    fontWeight: '700',
    marginVertical: Theme.hp(' 3%'),
  },
  desc: {
    color: Theme.color.text,
    fontSize: Theme.rf(14),
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: Theme.hp('2.6%'),
  },
  desc1: {
    color: Theme.color.white,
    fontSize: Theme.rf(14),
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: Theme.hp('2.6%'),
    marginVertical: Theme.hp(' 3%'),
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.hp(' 1%'),
    // justifyContent: 'space-between',
  },
  text1: {
    width: Theme.wp('26%'),
    color: Theme.color.primry,
    fontSize: Theme.rf(16),
    fontWeight: '700',
  },
  text2: {
    color: Theme.color.text,
    fontSize: Theme.rf(16),
    fontWeight: '400',
  },
  line1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Theme.hp('5%'),
  },
  pay: {
    width: Theme.wp('30%'),
    height: Theme.hp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.color.primry,
    borderRadius: 12,
  },
  label: {
    color: Theme.color.white,
    fontSize: Theme.rf(16),
    fontWeight: '400',
  },
  payBtn: {
    width: Theme.wp('60%'),
    height: Theme.hp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.color.primry,
    borderRadius: 12,
    marginTop: Theme.hp('8%'),
    alignSelf: 'center',
  },
})

export default styles
