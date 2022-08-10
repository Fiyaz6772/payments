import React from 'react'
import { TextInput } from 'react-native'

const FNInput = ({
  value,
  onChangeText,
  style,
  keyboardType,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      style={style}
      keyboardType={keyboardType}
      underlineColorAndroid="transparent"
      secureTextEntry={secureTextEntry}
    />
  )
}

export default FNInput
