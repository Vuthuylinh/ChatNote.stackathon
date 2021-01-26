import React from 'react'
import {View} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ChatScreen from '../sreens/ChatScreen'
import NoteSreen from '../sreens/NoteSreen'
import OnboardingScreen from '../sreens/OnboardingScreen'

const Stack = createStackNavigator()

const AppStack = ({navigation}) => {
  return (
<Stack.Navigator>
     <Stack.Screen name ="Onboarding Screen" component={OnboardingScreen}/>
     <Stack.Screen
        name ="Notes"
        component={NoteSreen}
        options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#2e64e5',
              fontSize:18
            },
            headerStyle: {
              shadowColor: '#fff',
              elevation: 0,
            },
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <FontAwesome5.Button
                  name="plus"
                  size={22}
                  backgroundColor="#fff"
                  color="#2e64e5"
                  onPress={() => navigation.navigate('Chat')}
                />
              </View>
            ),
        }}
        />
        <Stack.Screen name ="Chat" component={ChatScreen}/>
  </Stack.Navigator>
  )
}

export default AppStack
