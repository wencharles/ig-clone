
import { View, Text, TextInput,  StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import Validator from 'email-validator'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { db, auth } from '../../firebase'

const SignupForm = ({navigation}) => {
  const SignupFormSchema = yup.object().shape({
    email: yup.string().email().required('An email is required'),
    username: yup.string().required().min(2, 'A username is required'),
    password: yup.string().required().min(6, 'Your password has to be at least 8 characters')
  })

  const getRandomProfilePicture = async () =>{
    const response = await fetch("https://randomuser.me/api")

    const data = await response.json()
    return data.results[0].picture.large
  } 

  const onSignUp = async (email, password, username)=>{
    
    try{
      const authUser = await createUserWithEmailAndPassword(auth, email, password)
      
      await setDoc(doc(db, "users"), {
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profle_picture: await getRandomProfilePicture()
      });

    }catch(errors){
      console.log(errors.message)
      Alert.alert(errors.message)
    }
    
   
  }
  return (
    <View style={styles.wrapper}>
      <Formik
      initialValues={{email:'', username:'', password:''}}
      onSubmit={(values)=>{
        onSignUp(values.email, values.password, values.username)
      }}
      validationSchema={SignupFormSchema}
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
              placeholder='Email'
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
                  1 > values.username.length || values.username.length >=6
                    ? '#ccc'
                    : 'red'
              }
            ]}>
              <TextInput
              placeholderTextColor='#444'
              placeholder='username'
              autoCapitalize='none'
              textContentType='username'
              autoFocus={true}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
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
              <Text style={styles.buttonText}>Sign Up </Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={()=>navigation.push('LoginScreen')}>
                <Text style={{color:"#6BB0F5"}}>  Log in</Text>
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
export default SignupForm