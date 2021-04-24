import * as api from '../api'

export const getCategories = () => async (dispatch) =>{
    try{
        const {data} = await api.fetchCategories()
        console.log(data)
        dispatch({type: 'GET_CATEGORIES', payload: data})
    }catch(err){
        console.log(err.message)
    }
}