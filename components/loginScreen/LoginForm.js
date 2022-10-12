
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
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
      <Button title='Log in'/>
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

    }

})
export default LoginForm