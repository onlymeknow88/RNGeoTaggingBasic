import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Button = ({text, color = '#17c964', textColor = '#11181C'}) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: (textColor) =>({
    color: textColor,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textAlign: 'center',
  }),
});
