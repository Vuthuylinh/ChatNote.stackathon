// @refresh reset

import React, { useState, useEffect, useCallback } from 'react'; //useCallback => save previous messages
import { GiftedChat } from 'react-native-gifted-chat' //ui to handle messages
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, Text, View, TextInput, Button, LogBox } from 'react-native';
import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC8ZhJfMnRMEShpUgz_lzGdrkw5PLApkbw",
  authDomain: "stackathonchatnote.firebaseapp.com",
  projectId: "stackathonchatnote",
  storageBucket: "stackathonchatnote.appspot.com",
  messagingSenderId: "229246196629",
  appId: "1:229246196629:web:46606e685fc46effa8349c",
  databaseURL:"https://stackathonchatnote-default-rtdb.firebaseio.com/"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

// LogBox.ignoreLogs('Setting a timer for a long period of time')


const db = firebase.firestore()
const chatsRef = db.collection('chats')

const  ChatSreen =()=> {
  const [user, setUser] = useState(null)
  const [name, setName] = useState("")
  const [messages, setMessages] = useState([])
  useEffect(() => {
    readUser()
    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const message = doc.data()
          //createdAt is firebase.firestore.Timestamp instance
          //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
          return { ...message, createdAt: message.createdAt.toDate() }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      //save messages to state
      appendMessages(messagesFirestore)
    })
    return () => unsubscribe()
  }, [])

  //save previous messages
  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    },
    [messages]
  )

  async function readUser() {
    const user = await AsyncStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }
  async function handlePress() {
    const _id = Math.random().toString(36).substring(7)
    const user = { _id, name }
    await AsyncStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }
  async function handleSend(messages) {
    const writes = messages.map(message => chatsRef.add(message)) //add data to firebase
    await Promise.all(writes)
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
        <Button onPress={handlePress} title="Enter the chat" />
      </View>
    )
  }
  return (
    <GiftedChat messages={messages} user={user} onSend={handleSend} />
  );
}

export default ChatSreen
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
    marginBottom: 20,
    borderColor: 'blue'
  }
});
