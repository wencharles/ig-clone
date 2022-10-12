import { View, Text,  StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import {POSTS } from '../data/posts'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Stories/>
      <ScrollView>
        {POSTS.map((post, index)=>(
          <Post post={post} key={index}/>
          
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons}/>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "black",    
    }
})

export default HomeScreen