
import { View, Text, TextInput,  StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import Validator from 'email-validator'


const LoginForm = ({navigation}) => {
  const LoginFormSchema = yup.object().shape({
    email: yup.string().email().required('An email is required'),
    password: yup.string().required().min(6, 'Your password has to be at least 8 characters')
  })
  return (
    <View style={styles.wrapper}>
      <Formik
      initialValues={{email:'', password:''}}
      onSubmit={(values)=>{
        console.log(values)
      }}
      validationSchema={LoginFormSchema}
      validateOnMount={true}
      >
        {({handleChange, handleBlur, handleSubmit, values, isValid})=>(
          <>
            <View style={[
              styles.inputField,
              {
                borderColor: 
                  values.email.length < 1 || Validator.validate(values.email)
                    ? '#ccc'
                    : 'red'
              }
            ]}>
              <TextInput
              placeholderTextColor='#444'
              placeholder='Phone number, username or email'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
              autoFocus={true}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              />
            </View>
            <View style={[
              styles.inputField,
              {
                borderColor: 
                  1 > values.password.length || values.password.length >=6
                    ? '#ccc'
                    : 'red'
              }
            ]}>
                <TextInput
                placeholderTextColor='#444'
                placeholder='password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                
                />
            </View>
            <View style={{alignItems: 'flex-end', marginBottom: 30}}>
              <Text style={{color:"#6BB0F5"}}>Forgot Password?</Text>
            </View>
      
            <Pressable 
              titleSize={20} 
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Log in </Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Dont have an account yet?</Text>
              <TouchableOpacity onPress={()=>navigation.push('SignupScreen')}>
                <Text style={{color:"#6BB0F5"}}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        
      </Formik>
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
    button: isValid=>({
      backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'center',
      minHeight: 42,
      borderRadius:4
    }),
    signupContainer:{
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      marginTop:50
    }

})
export default LoginForm