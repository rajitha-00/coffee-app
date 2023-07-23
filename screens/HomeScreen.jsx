import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'


export default function HomeScreen() {
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image source={require('../assets/images/beansBackground1.png')} 
      className="w-full absolute -top-5 opacity-10"
      style={{height: 220}}

      />
      <SafeAreaView className="flex-1">

        <View className="px-4 flex-row justify-between items-center mt-10">
          <Image 
            source={require('../assets/images/avatar.png')} 
            className="w-9 h-9 rounded-full"
          />
          <View className="flex-row items-center space-x-2">
            <Image 
              source={require('../assets/icons/location.png')} 
              className="w-9 h-9 rounded-full"
            />
            <Text className="text-base font-semibold"> New York, NYC</Text>
          </View>
          <Image 
            source={require('../assets/icons/bell.png')} 
            className="w-9 h-9 rounded-full"
          />
        </View>
      </SafeAreaView>
    </View>
  )
}