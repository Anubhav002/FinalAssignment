import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import img from '../assets/images/star.png'
import { useDispatch, useSelector } from 'react-redux';
import { getMainData } from '../redux/action';

function Product() {
    const [data, setData] = useState([]);
    const route = useRoute()
    const id = route.params?.id
    // const getData = () => {
    //     axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
    //         const allData = response.data;
    //         setData(allData);
    //     })
    //         .catch(error => console.error(`Error:${error}`))
    // }
    const { Data } = useSelector(state => state.getMainDataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getMainData(id));
       setData(Data);
       console.log('data',data)
    }, [dispatch]);


    var myloop = [];

    for (let i = 1; i < (Data && Data.rating.rate); i++) {
        myloop.push(
            <Image style={{ flexDirection: 'column' }} source={img}></Image>
        );
    }
    const imageu = Data && Data.image;
    return (
        <ScrollView vertical style={styles.container}>
            <View style={styles.discription}>
                <Image style={styles.imageu} source={{ uri: imageu }}></Image>
                <Text style={styles.cat}>View More from {Data && Data.category}</Text>
                <Text style={styles.text}>{Data && Data.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    {myloop}<Text style={styles.count}>({Data && Data.rating && Data.rating.count})</Text>
                </View>
                <Text style={styles.text}>$-{Data && Data.price}</Text>
                <Text style={styles.text}>{Data && Data.description}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: '#2873F0',
        borderWidth: 1,
    },
    imageu: {
        margin: 10,
        height: 500,
        width: 400,
        borderBottomWidth: 1,
    },
    discription: {
        flex: 7,
    },
    item: {
        fontSize: 188,
        borderRadius: 12,
        backgroundColor: 'gray'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 15,
    },
    count: {
        fontSize: 20,
        color: 'black',
    },
    cat: {
        fontSize: 20,
        margin: 10,
        color: 'blue',
    }
})
export default Product