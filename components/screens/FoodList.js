import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const FoodList = (props) => {
  const { dt_txt, pic } = props
  const { item, food_txt } = styles
  return (
    <View style={item}>
      <MaterialCommunityIcons
      name={pic} 
      size={50} 
      color={'white'} 
      />
      <Text style={food_txt}>{dt_txt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: '#222222'
  },
  food_txt: {
    color: 'white',
    fontSize: 20
  }
})

export default FoodList
