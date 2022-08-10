import React, { useState, useRef } from 'react'
import { View, Text, Modal, TouchableOpacity, Alert, Image } from 'react-native'

import { Formik } from 'formik'
import Toast from 'react-native-toast-message'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import styles from './Style'
import { Theme } from '../../utils/Theme'
import { registerForm } from './formHandling'
import FNInput from '../../components/FNInput'
import FNLoader from '../../components/FNLoader'
import FNButton from '../../components/FNButton'

import { SERVER_URL } from '@env'

const Register = ({ navigation }) => {
  const [firstName] = useState('Fiyaz')
  const [lastName] = useState('Hussain')
  const [email] = useState('fiyaz1997@gmail.com')
  const [password] = useState('12345678')
  const [show, setShow] = useState(true)
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState('03142100449')
  const [logo] = useState(require('../../assets/images/logo.png'))

  const showToastError = message => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
    })
  }

  const showGenderError = () => {
    Toast.show({
      type: 'error',
      text1: 'Gender',
      text2: 'Gender is required',
    })
  }

  const showToastSuccess = message => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
    })
  }

  const handleRegister = async v => {
    setLoading(true)
    const url = `${SERVER_URL}api/signUp`
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: v.FIRSTNAME,
          lastName: v.LASTNAME,
          email: v.EMAIL,
          phone: v.PHONE,
          password: v.PASSWORD,
        }),
      })

      const resp = await res.text()
      console.log(resp)
      setLoading(false)

      if (res.status == 200) {
        showToastSuccess('Congratulation!')
        setTimeout(() => {
          navigation.replace('RegisterSuccess', {
            name: v.FIRSTNAME,
          })
        }, 1200)
      } else {
        showToastError(resp)
      }
    } catch (error) {
      Alert.alert('Error', error.message)
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.logoView}>
        <Image
          source={logo}
          style={{ width: '100%', height: '100%' }}
          resizeMode="center"
        />
      </View>

      <Text style={styles.loginText}>Sign Up</Text>
      <Text style={styles.desc}>Buy anything, get anywhere</Text>

      <View style={styles.body}>
        <Formik
          initialValues={{
            FIRSTNAME: firstName,
            LASTNAME: lastName,
            EMAIL: email,
            PHONE: phone,
            PASSWORD: password,
          }}
          validationSchema={registerForm}
          onSubmit={(v, a) => {
            handleRegister(v)
          }}
        >
          {props => (
            <>
              <FNInput
                placeholder="first name"
                placeholderTextColor={Theme.color.text}
                style={styles.input}
                value={props.values.FIRSTNAME}
                onChangeText={props.handleChange('FIRSTNAME')}
              />
              <Text
                style={{ ...styles.errorsText, marginBottom: Theme.hp('1%') }}
              >
                {props.touched.FIRSTNAME && props.errors.FIRSTNAME}
              </Text>
              <FNInput
                placeholder="last name"
                placeholderTextColor={Theme.color.text}
                style={styles.input}
                value={props.values.LASTNAME}
                onChangeText={props.handleChange('LASTNAME')}
              />
              <Text
                style={{ ...styles.errorsText, marginBottom: Theme.hp('1%') }}
              >
                {props.touched.LASTNAME && props.errors.LASTNAME}
              </Text>
              <FNInput
                placeholder="Email"
                placeholderTextColor={Theme.color.text}
                style={styles.input}
                keyboardType="email-address"
                value={props.values.EMAIL}
                onChangeText={props.handleChange('EMAIL')}
              />
              <Text style={styles.errorsText}>
                {props.touched.EMAIL && props.errors.EMAIL}
              </Text>

              <FNInput
                placeholder="Phone"
                placeholderTextColor={Theme.color.text}
                style={styles.input}
                keyboardType="numeric"
                value={props.values.PHONE}
                onChangeText={props.handleChange('PHONE')}
              />
              <Text style={styles.errorsText}>
                {props.touched.PHONE && props.errors.PHONE}
              </Text>

              <FNInput
                placeholder="Password"
                placeholderTextColor={Theme.color.text}
                style={styles.input}
                secureTextEntry={show}
                value={props.values.PASSWORD}
                onChangeText={props.handleChange('PASSWORD')}
              />
              <Text style={styles.errorsText}>
                {props.touched.PASSWORD && props.errors.PASSWORD}
              </Text>

              <FNButton
                style={styles.button}
                label="Sign Up"
                icon="sign-in-alt"
                size={20}
                color={Theme.color.white}
                labelStyle={styles.label}
                onPress={props.handleSubmit}
                // onPress={() => handleRegister()}
              />
              <Text style={styles.noAccount}>
                don't have an account?
                <Text
                  style={styles.create}
                  onPress={() => navigation.goBack()}
                >
                  {' '}
                  Create Now
                </Text>
              </Text>
            </>
          )}
        </Formik>
      </View>
      <FNLoader
        visible={loading}
        label="Please wait..."
      />
    </KeyboardAwareScrollView>
  )
}

export default Register
