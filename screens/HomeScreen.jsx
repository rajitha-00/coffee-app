import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { TextInput } from 'react-native'


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

        {/* search  bar */}
        <View className="mx-5 mt-14">
          <View className="flex-row justify-center items-center rounded-full p-1 bg-slate-300 shadow-slate-900">
            <TextInput placeholder='Search' className="p-3 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity className="p-2 rounded-full bg-amber-500">
              <Image 
                source={require('../assets/icons/search.png')} 
                className="w-9 h-9 rounded-full"
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}