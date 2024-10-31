import React from 'react'
import LoginPage from './pages/LoginPage'
import Recommendations from './pages/Recommendations'
import Library from './pages/Library'

import { Home } from './assets/icons/Home'
import { HomeOutline } from './assets/icons/HomeOutline'
import { Lib } from './assets/icons/Lib'
import { LibOutline } from './assets/icons/LibOutline'
import { User } from './assets/icons/User'
import { UserOutline } from './assets/icons/UserOutline'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function Navigate() {
    return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({ 

                tabBarIcon: ({ focused }) => {
                  let Icon
      
                  if (route.name === 'Recommendations') {
                    Icon = focused ? <Home /> : <HomeOutline  />
                  } else if (route.name === 'Library') {
                    Icon = focused ? <Lib /> : <LibOutline />
                  } else if (route.name === 'LoginPage') {
                    Icon = focused ? <User /> : <UserOutline />
                  }

                  return Icon
                },

                headerShown: false,
                tabBarLabel: () => null,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#25153A',
                    borderTopWidth: 0,
                    paddingTop: 7,
                },
              })}
        >
            <Tab.Screen
                name="Recommendations"
                component={Recommendations}
            />
            <Tab.Screen
                name="Library"
                component={Library}
            />
            <Tab.Screen
                name="LoginPage"
                component={LoginPage}
            />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }