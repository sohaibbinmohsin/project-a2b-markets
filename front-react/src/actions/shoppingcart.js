import * as api from '../api'

export const getCartItems = (history) => async (dispatch) =>{
    try{
        const {data} = await api.viewCart()
        dispatch({type: 'GET_ITEMS', payload: data})
        history.push('/shopping_cart')
    }catch(err){
        console.log(err.message)
    }
}