import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Header = (props) => {
    const {title, subTitle} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 26,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#11181C'
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#a1a1aa'
    }
})