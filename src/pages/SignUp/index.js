import {Button, Gap, TextInput} from '../../component';
import {StyleSheet, Text, View} from 'react-native';

import {Header} from '../../component';
import React from 'react';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Sign Up"
        subTitle="Geo Tagging untuk Area Penamanan Adaro Minerals Indoensia"
        onBack={() => navigation.navigate('SignIn')}
      />
      <View style={styles.container}>
      
      <View style={styles.photo}>
        <View style={styles.borderPhoto}>
          <View style={styles.photoContainer}>
            <Text style={styles.addPhoto}>Add Photo</Text>
          </View>
        </View>
      </View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button text="Create New Account" color="#d4d4d8" />
      </View>
    </View>
  );
};

export default SignUp;

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
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
