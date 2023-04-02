import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import img from '../assets/images/star.png'

function Item(props) {
    const navigation = useNavigation();
    const image=props.item.image;
    const handlePress=()=>{
        navigation.navigate("Product", { id: props.item.id })
    }

    var myloop = [];

    for (let i = 1; i < (props.item.rating && props.item.rating.rate); i++) {
     myloop.push(
       <Image style={{flexDirection:'column'}} source={img}></Image> 
     );
   }
  return (
    <View>
        <TouchableOpacity style={styles.item} onPress={handlePress}>
        <Image style={styles.imageu} source={{uri:image}}></Image>
        <View style={styles.contant}>
        <Text style={styles.text}>{props.item.title}</Text>
        <View style={{flexDirection:'row'}}>
            {myloop}<Text style={styles.count}>({props.item.rating && props.item.rating.count})</Text>
            </View>
        <Text style={styles.text3}>$-{props.item.price}</Text>
        <Text style={styles.text1}>Free Delivery</Text>
        <Text style={styles.text2}>Utsav Deal</Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({  
    item: {  
        flex:1,
        flexDirection:'row',
        margin:10,
        padding: 10,  
        fontSize: 18,  
        height: 200, 
        borderBottomWidth:.5, 
    },  
    imageu:{
        height:150,
        width:100,
    },
    contant:{
        padding: 10, 
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        marginRight:15,
    },
    text1:{
        fontSize:15,
        fontWeight:'500',
    },
    text3:{
        color:'black',
        fontWeight:'bold',
    },
    text2:{
        backgroundColor:'#ECDDFD',
        color:'#9881C3',
        fontWeight:'bold',
        padding:5,
        width:80,
    }
})
export default Item
