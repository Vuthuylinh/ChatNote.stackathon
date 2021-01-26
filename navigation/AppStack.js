import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import ChatScreen from '../sreens/ChatScreen'
import NoteSreen from '../sreens/NoteSreen'

const Stack = createStackNavigator()

const AppStack = () => {
  let component;
  return (
   <Stack.Navigator>
     <Stack.Screen name ="Your Notes" component={NoteSreen}/>
     <Stack.Screen name ="Chat with your friend" component={ChatScreen}/>
   </Stack.Navigator>
  )
}

export default AppStack
