import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import color from './contains/color'
import { navigationRef } from './rootNavigation'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, {useRef} from 'react'
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen'
import CreatePostScreen from './screens/CreatePostScreen';
import NotificationScreen from './screens/NotificationScreen';
import AccountScreen from './screens/AccountScreen';
import { UserReducer, initialUserState } from './context/UserContext';
import {useReducer, useState, useEffect, createContext} from 'react'
import { getStorage } from './utils/Storage';
import LoginView from './components/auth/LoginView';
import axios from 'axios'
import io from 'socket.io-client'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

axios.defaults.baseURL = 'https://foodtalk-backend.herokuapp.com'

const token = getStorage('@token')

export const UserContext = createContext()

const MainTab = () => {

  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: style.container}}>

<Tab.Screen name="Home" component={HomeScreen}  options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style = {style.item}>
            <View style = {style.icon_con}>
              <View style={style.top} backgroundColor = {focused ? color.textBlue : color.background}></View>
              <FontAwesome
                name="ravelry"
                size={26}
                color={focused ? color.textBlue : color.textIconSmall}
              ></FontAwesome>
            </View>
          </View>
        )
      }} />

      < Tab.Screen name="Explore" component={ExploreScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style = {style.item}>
            <View style = {style.icon_con}>
              <View style={style.top} backgroundColor = {focused ? color.textBlue : color.background}></View>
              <FontAwesome
                name="wpexplorer"
                size={26}
                color={focused ? color.textBlue : color.textIconSmall}
              ></FontAwesome>
            </View>
          </View>
        )
      }} />

      < Tab.Screen name="CreatePost" component={CreatePostScreen} options={{
        tabBarVisible: false,
        tabBarIcon: ({ focused }) => (

          <TouchableOpacity>
            <View style={{
              width: 55,
              height: 55,
              borderRadius: 55,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:focused ? color.background : color.primary,
              bottom: '50%',
            }}>
              <Text style={{
                fontSize: 32,
                color: color.background,
                bottom:3,
              }}>+</Text>
            </View>
          </TouchableOpacity>

        )
      }} />

      <Tab.Screen name="Notification" component={NotificationScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style = {style.item}>
            <View style = {style.icon_con}>
              <View style={style.top} backgroundColor = {focused ? color.textBlue : color.background}></View>
              <FontAwesome
                name="bell-o"
                size={26}
                color={focused ? color.textBlue : color.textIconSmall}
              ></FontAwesome>
            </View>
          </View>
        )
      }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style = {style.item}>
            <View style = {style.icon_con}>
              <View style={style.top} backgroundColor = {focused ? color.textBlue : color.background}></View>
              <FontAwesome
                name="user-o"
                size={26}
                color={focused ? color.textBlue : color.textIconSmall}
              ></FontAwesome>
            </View>
          </View>
        )
      }} />
    </Tab.Navigator >
  )
}

export default function App() {
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState);

  useEffect(() => {
    if (userState.isLoggedIn) {
      let socketio = io('https://foodtalk-backend.herokuapp.com', { transports: ['websocket'] })
      userDispatch({ type: 'SET_SOCKETIO', payload: socketio })
      socketio.on('connect', () => {
        console.log('connected')
      })

      socketio.on('notification', ({ data }) => {
        uiDispatch({ type: 'ADD_NOTIFICATION', payload: data })
      })
  
    return () => {
      socketio.disconnect()
        userDispatch({ type: 'SET_SOCKETIO', payload: null })
        console.log('disconnect')
    }
  }
}, [userState.isLoggedIn])
  


  return (
    <UserContext.Provider value = {{userState, userDispatch}}>
      <NavigationContainer ref = {navigationRef}>
          <Stack.Navigator initialRouteName="Spash"
          screenOptions={{header: () => null}}>
            {!userState.isLoggedIn &&
            <Stack.Screen name = "login" component={LoginView}/>}
            {userState.isLoggedIn &&
            <Stack.Screen name="HomePage" component={MainTab}/>}
          </Stack.Navigator>
      </NavigationContainer> 
    </UserContext.Provider>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    position: 'absolute',
    bottom: 10,
    marginHorizontal: 15,

    height: 60,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    paddingHorizontal: 15,
  },

  item: {
    position: 'absolute',
    top: '0%',
  },

  icon_con: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  top: {
    width: 65,
    height: 2,
    marginBottom: 15,
  }

})

