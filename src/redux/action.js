import axios from "axios";


export const getData=()=>async(dispatch)=>{
    try{
        const {data}= await axios.get('https://fakestoreapi.com/products');
        dispatch({type:'GET_DATA',payload:data})
    }
    catch(error){
        dispatch({type:'GET_DATA_FAIL',payload:error.message})
    }
}
export const getMainData=(id)=>async(dispatch)=>{
    try{
        const {data}= await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({type:'GET_MAIN_DATA',payload:data})
    }
    catch(error){
        console.log(error)
        dispatch({type:'GET_MAIN_DATA_FAIL',payload:error.message})
    }
}