import React, {useState} from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { Divider } from 'react-native-elements'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const bottomTabIcons = [
    {
      name: 'Home',
      iconname: 'home'
    },
    {
      name: 'Search',
      iconname: 'search'
    },
    {
      name: 'Reels',
      iconname: 'video-camera'
    },
    {
      name: 'Shop',
      iconname: 'shopping-bag',
    
    },
    {
      name: 'Profile',
      iconname: 'user'
    },
  ]


const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('home')

  const Icon = ({icon}) =>(
    <TouchableOpacity onPress={()=>setActiveTab(icon.iconname)}>
        <FontAwesome name={icon.iconname} size={25} color={activeTab === icon.iconname ? 'green': "white" } />
    </TouchableOpacity>
  )
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical'/>
      <View style={styles.container}>
        
        {icons.map((icon, index)=>(
          <Icon key={index} icon={icon}/>
        ))}
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    wrapper:{
      // position: 'absolute',
      // width: '100%',
      // bottom: '3%',
      // zIndex: 999,
      // backgroundColor: '#000'

    },
    icon: {
        width: 30,
        height: 30
    },
    container:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 50,
      paddingTop: 10
    }
})

export default BottomTabs