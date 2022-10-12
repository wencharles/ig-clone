import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const USERS = [
  {
      user: "cleverqazi",
      image:  "https://i.imgur.com/JsRScQU.jpeg"
  }, 
  {
      user: "theqazman",
      image:  "https://i.imgur.com/5Chyeq0.jpeg"
  },
  {
      user: "sugarshaw",
      image:  "https://i.imgur.com/trDteiy.jpeg"
  }
  , 
  {
      user: "nazdumask",
      image:  "https://i.imgur.com/lGPlXlO.jpeg"
  },
  {
    user: "aplastic",
    image:  "https://i.imgur.com/rCDaH8a.jpeg"
}
]

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}>

        {USERS.map((story, index)=>(
          <View key={index}>
            <Image 
              style={styles.story} 
              source={{uri: story.image}}
            />
            <Text style={{color: "white"}}>
              {story.user.length > 11 ? story.user.slice(0, 5).toLowerCase():  story.user}
              
              </Text>
          </View>
          
        ))}

      </ScrollView>
     
    </View>
  )
}

const styles = StyleSheet.create({
  story:{
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth:3,
    marginLeft: 6,
    borderColor: "#ff8501"
  }
})
export default Stories