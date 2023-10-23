/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import screenOne from './screenOne'
import screenTwo from './screenTwo'
import screenThree from './screenThree'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()


const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: 'white',
        tabBarStyle: {
          backgroundColor: 'black'
        },
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'white'
        }
      }}
    >
      <Tab.Screen
        name={'Body'}
        component={screenOne}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={'body'}
              size={25}
              color={focused ? 'white' : 'black'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'Mind'}
        component={screenTwo}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'brain'}
              size={25}
              color={focused ? 'white' : 'black'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'Food'}
        component={screenThree}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'food-drumstick'}
              size={25}
              color={focused ? 'white' : 'black'}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}


export default Tabs
