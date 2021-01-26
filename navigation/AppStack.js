import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import ChatScreen from '../sreens/ChatScreen'
import NoteSreen from '../sreens/NoteSreen'
import OnboardingScreen from '../sreens/OnboardingScreen'

const Stack = createStackNavigator()

const AppStack = () => {
  let component;
  return (
   <Stack.Navigator>
     <Stack.Screen name ="Onboarding Screen" component={OnboardingScreen}/>
     <Stack.Screen name ="Notes" component={NoteSreen}/>
     <Stack.Screen name ="Chat" component={ChatScreen}/>
   </Stack.Navigator>
  )
}

export default AppStack
