import { View, Text, TextInput, Image, Button } from 'react-native'
import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'

const PLACE_HOLDER_IMG = "https://i.imgur.com/IkcaU4P.jpeg"
const uploadPostSchema = yup.object().shape({
    imageUrl: yup.string().url().required('A URL is required'),
    caption: yup.string().max(2200, 'caption has reached the caracter limit')
})
const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACE_HOLDER_IMG)

    return (
       <Formik
       initialValues={{caption: '', imageUrl: ''}}
       onSubmit={(values)=>{
        console.log("your post was submitted successfully")
        navigation.goBack()
        }}
       validationSchema={uploadPostSchema}
       validateOnMount={true}
       >
        {({
            handleBlur, 
            handleChange, 
            handleSubmit, 
            values, 
            errors, 
            isValid
        })=>(
            <>
                <View 
                style={{margin: 20, justifyContent: 'space-between', flexDirection:'row'}}>
                    <Image source={{uri: validUrl.isUri(thumbnailUrl)  ? thumbnailUrl : PLACE_HOLDER_IMG}}
                    style={{width: 100, height: 100}}
                    />
                <View style={{flex:1, marginLeft: 20}}>
                    <TextInput 
                    
                    style={{color: 'white', fontSize: 20}}
                    placeholder='Write a caption' 
                    placeholderTextColor='gray'
                    multiline={true}
                    onChangeText={handleChange('caption')}
                    onBlur={handleBlur('caption')}
                    value={values.caption}
                    />
                </View>
                
                </View>
                <Divider width={0.2} orientation='vertical'/>
                <TextInput 
                onChange={e =>setThumbnailUrl(e.nativeEvent.text)}
                style={{color: 'white', fontSize: 18}}
                placeholder='Enter image url' 
                placeholderTextColor='gray'
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                />
                {errors.imageUrl && (
                    <Text style={{fontSize:10, color: 'red'}}>
                        {errors.imageUrl}
                    </Text>
                )}
                <Button onPress={handleSubmit} title='share' disabled={!isValid}/>
            </>
        )}
       </Formik>
    )
}

export default FormikPostUploader