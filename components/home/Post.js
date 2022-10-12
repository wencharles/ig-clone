import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        name: 'like',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likedImageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
    },
    {
        name: 'comment',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',
    },
    {
        name: 'share',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
    },
    {
        name: 'save',
        imageUrl:'',
    },
]

const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}}>
        <Divider width={3} orientation='vertical' color='green'/>
        <PostHeader post={post}/>
        <PostImage post={post}/>
        <View style={{marginHorizontal: 15, marginTop:10}}>
            <PostFooter/>
            <Likes post={post}/>
            <Caption post={post}/>
            <CommentSection post={post}/>
            <Comments post={post}/>
        </View>
        
      
    </View>
  )
}

const PostHeader = ({post}) =>(
    <View style={{flexDirection:'row', justifyContent: 'space-between', margin:5, alignItems:'center'}}>
        <View style={{flexDirection: 'row', alignItems: "center"}}>
            <Image style={styles.story} source={{uri: post.profilePicture}}/>
            <Text style={{color:'white', marginLeft: 5}}>{post.user}</Text>
        </View>
        <View>
            <Text style={{color: 'white', fontWeight:'900'}}>...</Text>
        </View>
    </View>
)

const PostImage = ({post}) =>(
    <View style={{width:'100%', height: 450}}>
        <Image source={{uri: post.inmageUrl}} style={{height:'100%', resizeMode: 'cover'}}/>

    </View>
  )

const PostFooter = ()=>(
    <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}></Icon>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}></Icon>
            <Icon imgStyle={[styles.footerIcon,styles.shareIcon]} imgUrl={postFooterIcons[2].imageUrl}></Icon>
        </View>
        {/* style={{flex: 1, alignItems: 'flex-end'}} */}
        <View >
    
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl}></Icon>
            
        </View>
        
    </View>
    
)

const Likes = ({post}) =>(
    <View style={{flexDirection: 'row', marginTop: 4}}>
        <Text style={{color:'white', fontWeight: '600'}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
    
)

const Icon = ({imgStyle, imgUrl})=>(
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}}/>
    </TouchableOpacity>
)

const Caption = ({post}) =>(
    <View style={{marginTop: 5}}>
        <Text style={{color: 'white'}}>
            <Text style={{fontWeight: '600'}}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

const CommentSection = ({post}) =>(
    <View style={{marginTop:5}}>
        {!!post.commets.length && (
            <Text style={{color: 'grey'}}>
                View {post.commets.length > 1 ? 'all ' : ''} {post.commets.length}
                {post.commets.length > 1 ? ' comments' : ' comment' }
            </Text>
        )}
        
    </View> 
)

const Comments = ({post}) =>(
    <>
    {post.commets.map((comment, index)=>(
        <View key={index}>
            <Text style={{color: 'white'}}> 
            <Text style={{fontWeight: '600'}}>{comment.user} </Text>
            
            {comment.comment}</Text>
        </View>
    ))}
    </>
)

const styles = StyleSheet.create({
    story:{
      width: 35,
      height: 35,
      borderRadius: 50,
      borderWidth:3,
      marginLeft: 6,
      borderColor: "#ff8501"
    },
    footerIcon:{
        width: 33,
        height: 33,
    },
    shareIcon:{
        transform: [{rotate: '320deg'}],
        marginTop: -3
    },
    leftFooterIconsContainer:{
        flexDirection:'row',
        width: '32%',
        justifyContent: "space-between"
    }
  })
export default Post