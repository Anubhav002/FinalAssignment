import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Modal, TouchableOpacity } from 'react-native'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/action';
import img from '../assets/images/camera.png'
import imgS from '../assets/images/search.png'
import imgC from '../assets/images/cart.png'
import imgM from '../assets/images/mic.png'
import imgF from '../assets/images/filter.png'

function Content() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [count, setCount] = useState();
    const [modal,setModal]=useState();
    const [data, setData] = useState([]);
    const { Data } = useSelector(state => state.getDataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
        setData(Data);
    }, [dispatch]);

    const handleModal = (id) => {
        setModal('filter')
        setCount('1');
        setIsModalVisible(!isModalVisible)
        setData(Data);
        let filteredData=[]
        if(id==='1'){
            setData(Data);
        }
        if(id==='2'){
            filteredData = data.filter(i => (i.category === "men's clothing"));
            setData(filteredData)
        }
        if(id==='3'){
            filteredData = data.filter(i => (i.category === "women's clothing"));
            setData(filteredData)
        }
        if(id==='4'){
            filteredData = data.filter(i => (i.category === "jewelery"));
            setData(filteredData)
        }
        if(id==='5'){
            filteredData = data.filter(i => (i.category === "electronics"));
            setData(filteredData)
        }
    };

    const handleSortModal = (id) => {
        setIsModalVisible(!isModalVisible)
        setModal('sort')}

    // const data=()=>{
    //     axios.get('https://fakestoreapi.com/products').then((response)=>{
    //         const allData=response.data;
    //         setData(allData);
    //     })
    //     .catch(error=>console.error(`Error:${error}`))
    // }

    


    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.header}>
                    <Text style={styles.item}>
                        Content
                    </Text>
                    <View style={styles.image}>
                        <Image source={imgS}></Image>
                        <Image style={{ width: 30, height: 30 }} source={imgM}></Image>
                        <Image source={img}></Image>
                        <Image source={imgC}></Image>
                    </View>
                </View>
                <View style={styles.subHeader}>
                    <TouchableOpacity style={styles.subHead} onPress={handleSortModal}><Text>Sort by</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.subHead} onPress={handleModal}>
                    <Image source={imgF} style={{width:20,height:20}}></Image>
                        <Text>Filter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subHead}><Text>Compare</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.subHead}><Text>Category</Text></TouchableOpacity>
                </View>
            </View>
            <Modal transparent={true} visible={isModalVisible}>
                <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
                  { modal ==='filter' ?<View style={styles.modal}>
                        <Text>What Do You Want??</Text>
                        <TouchableOpacity style={styles.subHead} onPress={()=>handleModal('1')}>
                            <Text>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subHead} onPress={()=>handleModal('2')}>
                            <Text>Men's Cloths</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subHead} onPress={()=>handleModal('3')}>
                            <Text>Woman's Cloths</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subHead} onPress={()=>handleModal('4')}>
                            <Text>Jewallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subHead} onPress={()=>handleModal('5')}>
                            <Text>Electronics</Text>
                        </TouchableOpacity>
                    </View>:
                    <View style={styles.Sortmodal}>
                    <TouchableOpacity style={styles.subHead} onPress={()=>handleSortModal()}>
                    <Text>Price In Decreasing Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subHead} onPress={()=>handleSortModal()}>
                    <Text>Price In Increasing Order</Text>
                    </TouchableOpacity>
                </View>
                  }
                </View>
            </Modal>
            <View style={styles.discription}>
                <ScrollView vertical>
                    {
                      count ? 
                      data && data.map((item,index) => <Item key={index} item={item} />):
                      Data && Data.map((item,index) => <Item key={index} item={item} />)
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        flex: 1,
        borderBottomWidth: .5,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2873F0',
        justifyContent: 'space-between',
        padding: 5,
    },
    modal: {
        backgroundColor: '#fff',
        margin: 50,
        padding: 30,
        borderRadius: 10,
        flex: 1/2,
        gap:20,
    },
    Sortmodal: {
        backgroundColor: '#fff',
        margin: 50,
        padding: 30,
        borderRadius: 10,
        flex: 1/6,
        gap:20,
    },
    subHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    subHead: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 18,
        padding: 5,
        color: 'black',
        fontWeight: 'bold',
    },
    discription: {
        flex: 7,
    },
    image: {
        flexDirection: 'row',
        gap: 10,
        paddingRight: 10,

    },
    item: {
        fontSize: 30,
        color: 'black'
    },
})

export default Content

