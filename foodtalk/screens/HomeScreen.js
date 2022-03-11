import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.tittleNameApp}>Food Talk</Text>
        <View style={styles.iconRightTop}>
          <View style={styles.searchUserFrame}>
            <TouchableOpacity>
              <Ionicons name='search-outline' size={28} color={color.primary}></Ionicons>
            </TouchableOpacity></View>
          <View style={styles.chatFrame}>
            <TouchableOpacity>
              <Ionicons name='chatbubble-ellipses-outline' size={28} color={color.primary}></Ionicons>
            </TouchableOpacity></View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>

        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingTop: 50
  },
  top: {
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  tittleNameApp: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 'bold',
    color: color.textGray,
  },
  iconRightTop: {
    flexDirection: 'row',
  },
  searchUserFrame: {
    backgroundColor: color.post,
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatFrame: {
    backgroundColor: color.post,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    paddingBottom: 60,
  }
})