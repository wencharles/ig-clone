import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <FormikPostUploader navigation={navigation}/>
    </View>
  )
}

const Header = ({navigation}) =>(
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name='chevron-back' size={30} color='white'/>
      </TouchableOpacity>
      
      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
)
const styles = StyleSheet.create({
  container:{
    marginHorizontal: 15,
    marginTop: 5 

  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText:{
    color:'#fff',
    fontWeight: '600',
    marginRight: 27.5

  }

})
export default AddNewPost