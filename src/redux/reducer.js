import GET_DATA from './action'
import GET_DATA_FAIL from './action'


export const getDataReducer=(state={data:[]}, action)=>{
  switch(action.type){
    case 'GET_DATA':
        return {Data:action.payload}
    case 'GET_DATA_FAIL':
        return {error:action.payload}
    default:
        return state;
  }
}

export const getMainDataReducer=(state={data:[]}, action)=>{
    switch(action.type){
      case 'GET_MAIN_DATA':
          return {Data:action.payload}
      case 'GET_MAIN_DATA_FAIL':
          return {error:action.payload}
      default:
          return state;
    }
  }