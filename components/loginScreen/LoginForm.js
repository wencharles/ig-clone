
import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.inputField}>
            <TextInput
            placeholderTextColor='#444'
            placeholder='Phone number, username or email'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}
            />
        </View>
        <View style={styles.inputField}>
            <TextInput
            placeholderTextColor='#444'
            placeholder='password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType='password'
            
            />
        </View>
        <View style={{alignItems: 'flex-end', marginBottom: 30}}>
          <Text style={{color:"#6BB0F5"}}>Forgot Password?</Text>
        </View>
      {/* <Button title='Log in'/> */}
      <Pressable 
        titleSize={20} style={styles.button}
        onPress={()=>console.log('you clicked me')}>
        <Text style={styles.buttonText}>Log in </Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text>Dont have an account yet?</Text>
        <TouchableOpacity>
          <Text style={{color:"#6BB0F5"}}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop:80
    },
    inputField:{
        borderRadius: 4,
        padding: 6,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth:1

    },
    button:{
      backgroundColor: '#0096F6',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'center',
      minHeight: 42,
      borderRadius:4
    },
    signupContainer:{
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      marginTop:50
    }

})
export default LoginForm