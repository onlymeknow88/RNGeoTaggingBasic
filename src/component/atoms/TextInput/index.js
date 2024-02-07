import { StyleSheet, Text, TextInput as TextInputRN, View } from 'react-native'

import React from 'react'

const TextInput = (props) => {
    const {label,placeholder} = props
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder}/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    label: {
        color: '#11181C',
        fontFamily: 'Poppins-Regular',  
        fontSize: 16 
    },
    input: {
        borderWidth: 1,
        borderColor: '#a1a1aa',
        borderRadius: 8,
        padding: 10
    }
})