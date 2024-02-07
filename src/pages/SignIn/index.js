import {Button, Gap, TextInput} from '../../component';
import {StyleSheet, Text, View} from 'react-native';

import {Header} from '../../component';
import React from 'react';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Sign In"
        subTitle="Geo Tagging untuk Area Penamanan Adaro Minerals Indoensia"
      />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#d4d4d8"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
