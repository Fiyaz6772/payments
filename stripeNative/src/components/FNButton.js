import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const FNButton = ({ style, label, labelStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={style}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  )
}

export default FNButton
