// @refresh state
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7p4DViT1zF69mzia_1pVWMGm0igXvW9A",
  authDomain: "react-native-chat-75883.firebaseapp.com",
  projectId: "react-native-chat-75883",
  storageBucket: "react-native-chat-75883.appspot.com",
  messagingSenderId: "556302913531",
  appId: "1:556302913531:web:a2ffe1779a83d6b2ee055e"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  const [user, setUser] = useState(null)
  const [name, setName] = useState("")

  useEffect(() => {
    readUser()
  }, [])

  async function readUser() {
    const user = await AsyncStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }
  async function handlePress() {
    const _id = Math.random().toString(36).substring(7)
    const user ={_id,name}
    await AsyncStorage.setItem('user',JSON.stringify(user))
    setUser(user)
  }
  if (!user) {
    return (
      <View style={StyleSheet.container}>
        <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName}/>
        <Button onPress ={handlePress} title="Enter the chat"/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text> We have a user</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 15,
    marginBottom:20,
    borderColor: 'blue'
  }
});
