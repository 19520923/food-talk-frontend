import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import color from '../contains/color'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {UserContext} from '../App'

const Tab = createMaterialTopTabNavigator();

const AccountScreen = () => {
    const {userState, userDispatch} = useContext(UserContext)


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.nameUser}>{userState.currentUser.username}</Text>
        <Ionicons name='settings' size={24} color={color.textGray} />
      </View>
      <ScrollView>
        <View style={styles.mid}>
          <View style={styles.imageFrame}>
            <Image
              //source={require('../../contains//assetImages//background_signIn.jpg')}
              style={styles.coverImage}
              resizeMode='stretch'
              source={{
                uri: 'https://i.pinimg.com/564x/f7/c9/21/f7c9219902a7472f5c9bc244548311ce.jpg',
              }}
            />

            <View style={styles.avatarFrame}>
              <Image
                //source={require('../../contains//assetImages//background_signIn.jpg')}
                style={styles.avatarImage}
                resizeMode='stretch'
                source={{
                  uri: 'https://i.pinimg.com/564x/eb/ef/d5/ebefd5173889e9a8502cf04e7b016847.jpg',
                }}
              />
            </View>

            <View style={styles.fullNameFrame}>
              <Text style={styles.fullName}>{userState.currentUser.first_name + " " + userState.currentUser.last_name}</Text>
              <TouchableOpacity>
                <Ionicons name='pencil' size={18} color={color.textIconSmall}></Ionicons>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.chatFrame}>
            <TouchableOpacity>
              <Ionicons name='chatbubble-ellipses-outline' size={42} color={color.primary}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bot}>
          <View style={styles.followView}>
            <View style={styles.followingView}>
              <Text style={styles.followText}>Following</Text>
              <Text style={styles.followNumberText}>{userState.currentUser.following.lenght || "0"}</Text>
            </View>
            <View style={styles.followingView}>
              <Text style={styles.followText}>Follower</Text>
              <Text style={styles.followNumberText}>{userState.currentUser.follower.lenght || "0"}</Text>
            </View>
            <View style={styles.followingView}>
              <Text style={styles.followText}>Like</Text>
              <Text style={styles.followNumberText}>0</Text>
            </View>
          </View>

          <Text style={styles.aboutText}>My passion is cooking</Text>

        </View>

        
      </ScrollView>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingTop: 50,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  nameUser: {
    fontSize: 20,
    color: color.textGray,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  mid: {
    marginTop: 5,
    flexDirection: 'row-reverse'
  },
  imageFrame: {
    alignItems: 'center',
  },
  coverImage: {
    width: 420,
    height: 250,
  },
  chatFrame: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.post,
    position: 'absolute',
    marginRight: 10,
    marginTop: 10
  },
  avatarFrame: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
    borderRadius: 100,
    position: 'absolute',
    marginTop: 200
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 150,
  },
  fullNameFrame: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
  },
  fullName: {
    fontSize: 20,
    color: color.textGray,
    fontWeight: 'bold',
    marginRight: 10,
  },
  followView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 35
  },
  followingView: {
    alignItems: 'center',
    width: 80,
    height: 30
  },
  followText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: color.textIconSmall,
  },
  followNumberText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16,
    color: color.textGray,
  },
  aboutText: {
    textAlign: 'center',
    marginTop: 35,
    fontFamily: 'Roboto',
    fontSize: 15,
    marginBottom: 50,
  }
})