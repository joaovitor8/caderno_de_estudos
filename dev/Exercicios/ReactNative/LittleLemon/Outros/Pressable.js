import React, { useState } from 'react';
import {Text, StyleSheet, TextInput, Pressable, View, ScrollView} from 'react-native';

export default function({navegation}) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <ScrollView style={styles.a}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>

        <View>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'password'}
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <Pressable onPress={() => navegation.navigate('Bem-Vindo')} style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  a: {
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});