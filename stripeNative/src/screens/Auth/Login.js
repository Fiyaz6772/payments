import React, { useState } from 'react'
import { View, Text, Alert, Image } from 'react-native'

import { Formik } from 'formik'
import Toast from 'react-native-toast-message'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import styles from './Style'
import { Theme } from '../../utils/Theme'
import { loginForm } from './formHandling'
import FNInput from '../../components/FNInput'
import FNLoader from '../../components/FNLoader'
import FNButton from '../../components/FNButton'

import { SERVER_URL } from '@env'

const Login = ({ navigation }) => {
  const [email] = useState('fiyaz1997@gmail.com')
  const [password] = useState('12345678')
  const [show, setShow] = useState(true)
  const [loading, setLoading] = useState(false)
  const [logo] = useState(require('../../assets/images/logo.png'))

  const showToastError = message => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
    })
  }

  const showToastSuccess = message => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
    })
  }

  const doLogin = async v => {
    setLoading(true)
    const url = `${SERVER_URL}api/login`
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: v.EMAIL,
          password: v.PASSWORD,
        }),
      })

      setLoading(false)

      if (res.status == 200) {
        const response = await res.json()
        showToastSuccess('Login successfull')
        navigation.replace('Home', {
          response,
        })
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: 'Home' }, { params: response }],
        // })
      } else {
        const resp = await res.text()
        showToastError(resp)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      Alert.alert('Error', error.message)
    }
  }

  return (
    <KeyboardAwareScrollView>
      <View style={styles.logoView}>
        <Image
          source={logo}
          style={{ width: '100%', height: '100%', marginLeft: Theme.wp('5%') }}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.loginText}>Login</Text>
      <Text style={styles.desc}>Buy anything, get anywhere</Text>

      <View style={styles.body}>
        <Formik
          initialValues={{
            EMAIL: email,
            PASSWORD: password,
          }}
          validationSchema={loginForm}
          onSubmit={(v, a) => {
            doLogin(v)
          }}
        >
          {props => (
            <>
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
              <View style={styles.passView}>
                <FNInput
                  placeholder="Password"
                  placeholderTextColor={Theme.color.text}
                  style={styles.inputPass}
                  secureTextEntry={show}
                  value={props.values.PASSWORD}
                  onChangeText={props.handleChange('PASSWORD')}
                />
                <View style={styles.iconView}></View>
              </View>
              <Text style={styles.errorsText}>
                {props.touched.PASSWORD && props.errors.PASSWORD}
              </Text>
              <Text style={styles.forgotPass}>Forgot Password?</Text>
              <FNButton
                style={styles.button}
                label="Login"
                icon="sign-in-alt"
                size={20}
                color={Theme.color.white}
                labelStyle={styles.label}
                onPress={props.handleSubmit}
              />
            </>
          )}
        </Formik>
        <Text style={styles.noAccount}>
          don't have an account?
          <Text
            style={styles.create}
            onPress={() => navigation.navigate('Register')}
          >
            {' '}
            Create Now
          </Text>
        </Text>
      </View>
      <FNLoader
        visible={loading}
        label="Logging In..."
      />
    </KeyboardAwareScrollView>
  )
}

export default Login
