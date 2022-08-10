import React from 'react'
import { Text, TouchableOpacity, View, Image, Alert } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Toast from 'react-native-toast-message'
import { useStripe } from '@stripe/stripe-react-native'

import styles from './Style'
import { Theme } from '../../utils/Theme'
import FNButton from '../../components/FNButton'

import { SERVER_URL } from '@env'

const Home = ({ navigation, route }) => {
  const { id, firstName, lastName, email, phone } = route.params.response
  const [amount, setAmount] = React.useState(0)

  const { initPaymentSheet, presentPaymentSheet } = useStripe()

  const fetchPaymentSheetParams = async () => {
    let url = `${SERVER_URL}api/paymentIntent`
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100,
          description:
            'This is test payment done by Fiyaz for his helping blog for developers',
          receipt_email: email,
          name: `${firstName} ${lastName}`,
          phone: phone,
          uid: id,
        }),
      })
      if (res.status === 200) {
        const response = await res.json()
        console.log(response)
        if (response.error) {
          Alert.alert(
            `${response.error.statusCode}`,
            response.error.raw.message,
          )
        } else {
          const { paymentIntent } = response
          return { paymentIntent }
        }
      }
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  }

  const initializePaymentSheet = async () => {
    if (amount > 0) {
      const { paymentIntent } = await fetchPaymentSheetParams()
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: paymentIntent,
        merchantDisplayName: 'Fiyaz Hussain',
      })

      if (error) {
        const message = error.message
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `${message}`,
        })
        return
      }

      openPaymentSheet()
    } else {
      Toast.show({
        type: 'info',
        text1: 'Add Amount',
        text2: 'Please select any payment to process',
      })
    }
  }

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet()
    if (error) {
      if (error.message === 'Canceled') {
        return null
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `${error.message}`,
        })
        return
      }
    }

    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Thank you! You have paid successfully.',
    })
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.heading}>Welcome Fiyaz</Text>

        <Text style={styles.desc}>
          This is helping project for developers for implementing payments using
          Stripe in React Native
        </Text>

        <Text style={styles.desc1}>
          You can use test card for this transcation
        </Text>

        <View style={styles.line}>
          <Text style={styles.text1}>Card:</Text>
          <Text style={styles.text2}>4242 42424 4242 4242</Text>
        </View>

        <View style={styles.line}>
          <Text style={styles.text1}>Exp Date:</Text>
          <Text style={styles.text2}>Any valid date after today.</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text1}>CVC:</Text>
          <Text style={styles.text2}>any 3 digits.</Text>
        </View>

        <Text
          style={{
            ...styles.desc1,
            marginVertical: 0,
            marginTop: Theme.hp('3%'),
          }}
        >
          For US you can use any 5 digits zip code.
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.line1}>
          <FNButton
            style={styles.pay}
            label="100"
            labelStyle={styles.label}
            onPress={() => setAmount(100)}
          />
          <FNButton
            style={{ ...styles.pay, backgroundColor: Theme.color.secondary }}
            label="150"
            labelStyle={styles.label}
            onPress={() => setAmount(150)}
          />
        </View>

        <View style={styles.line1}>
          <FNButton
            style={{ ...styles.pay, backgroundColor: Theme.color.tertiary }}
            label="200"
            labelStyle={styles.label}
            onPress={() => setAmount(200)}
          />
          <FNButton
            style={{ ...styles.pay, backgroundColor: Theme.color.helper }}
            label="250"
            labelStyle={styles.label}
            onPress={() => setAmount(250)}
          />
        </View>

        <FNButton
          style={styles.payBtn}
          label="Pay"
          labelStyle={styles.label}
          onPress={() => initializePaymentSheet()}
        />
      </View>
    </View>
  )
}

export default Home
