import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar
} from 'react-native'
import FoodList from './FoodList'

const DATA1 = [
  {
    dt_txt: 'Burger: 600 Calories',
    pic: 'food'
  },
  {
    dt_txt: 'Croissant: 400 Calories',
    pic: 'food-croissant'
  },
  {
    dt_txt: 'Hot Dogs: 450 Calories',
    pic: 'food-hot-dog'
  },
  {
    dt_txt: 'Steak: 800 Calories',
    pic: 'food-steak'
  },
  {
    dt_txt: 'Takeout: 1000 Calories',
    pic: 'food-takeout-box'
  },
  {
    dt_txt: 'Turkey: 750 Calories',
    pic: 'food-turkey'
  },
  {
    dt_txt: 'Milk + Cereal: 650 Calories',
    pic: 'food-variant'
  }
]

const ScreenThree = () => {
  const { container, image } = styles
  const renderItem1 = ({ item }) => (
    <FoodList
      pic={item.pic}
      dt_txt={item.dt_txt}
    />
  )

  return (
    <SafeAreaView style={container}>
      <Text style={styles.topTxt}>You Wish You Could Eat This:</Text>
        <FlatList
          data={DATA1}
          renderItem={renderItem1}
          keyExtractor={(item) => item.dt_txt}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ddc696'
  },
  image: {
    flex: 1
  },
  topTxt: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25
  }
})
export default ScreenThree
