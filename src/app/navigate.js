import React from "react"
import LoginPage from "../pages/LoginPage"
import RegPage from "../pages/RegPage"
import Recommendations from "../pages/Recommendations"
import Library from "../pages/Library"
import FavoriteBook from "../pages/FavoriteBooks"

import { Home } from "../../assets/icons/Home"
import { HomeOutline } from "../../assets/icons/HomeOutline"
import { Lib } from "../../assets/icons/Lib"
import { LibOutline } from "../../assets/icons/LibOutline"
import { User } from "../../assets/icons/User"
import { UserOutline } from "../../assets/icons/UserOutline"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function TabNavigate() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let Icon;

          if (route.name === "Recommendations") {
            Icon = focused ? <Home /> : <HomeOutline />;
          } else if (route.name === "Library") {
            Icon = focused ? <Lib /> : <LibOutline />;
          } else if (route.name === "LoginPage") {
            Icon = focused ? <User /> : <UserOutline />;
          }

          return Icon;
        },

        headerShown: false,
        tabBarLabel: () => null,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#25153A",
          borderTopWidth: 0,
          paddingTop: 7,
        },
      })}
    >
      <Tab.Screen name="Recommendations" component={Recommendations} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="LoginPage" component={LoginPage} />
    </Tab.Navigator>
  );
}

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegPage" component={RegPage} />
        <Stack.Screen name="FavoriteBook" component={FavoriteBook} />
        <Stack.Screen name="TabNavigate" component={TabNavigate} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
