import { Formik } from 'formik'
import * as yup from 'yup'

export const registerForm = yup.object({
  FIRSTNAME: yup
    .string()
    .min(3, 'minimun 3 chracters required')
    .max(35, 'maximum 35 characters allowed')
    .required('first name is required'),
  LASTNAME: yup
    .string()
    .min(3, 'minimun 3 chracters required')
    .max(35, 'maximum 35 characters allowed')
    .required('last name is required'),
  EMAIL: yup
    .string()
    .email('Please enter a valid email')
    .min(5, 'minimun 5 chracters required')
    .max(255, 'maximum 255 characters allowed')
    .required('email is required'),
  PHONE: yup
    .string()
    .min(11, 'minimun 3 chracters required')
    .max(13, 'maximum 50 characters allowed')
    .required('phone number is required'),
  PASSWORD: yup
    .string()
    .min(8, 'minimun 8 chracters required')
    .max(255, 'maximum 255 characters allowed')
    .required('password is required'),
})

export const loginForm = yup.object({
  EMAIL: yup
    .string()
    .email('Please enter a valid email')
    .min(5, 'minimun 5 chracters required')
    .max(255, 'maximum 255 characters allowed')
    .required('email is required'),
  PASSWORD: yup
    .string()
    .min(8, 'minimun 8 chracters required')
    .max(255, 'maximum 255 characters allowed')
    .required('password is required'),
})
