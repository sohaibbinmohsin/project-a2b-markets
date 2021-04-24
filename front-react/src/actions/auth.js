import * as api from '../api'

export const signin = (body, history) => async (dispatch) =>{
    try{
        const {data, status} = await api.signIN(body)
        dispatch({type: 'AUTH', data})
        history.push('/')

    }catch(err){
        console.log(err.message)
    }
}

export const signup = (body, history) => async (dispatch) =>{
    try{
        const {data, status} = await api.signUP(body)
        if(status===200){
            history.push('/signUp_verification')
        }
        
    }catch(err){
        console.log(err.message)
    }
}

export const signupVendor = (body, history) => async (dispatch) =>{
    try{
        const {data, status} = await api.signUpVendor(body)
        if(status===200){
            history.push('/Vendor_signUp_verification')
        }
        
    }catch(err){
        console.log(err.message)
    }
}

export const verify_account = (body, history) => async (dispatch) =>{
    try{
        const {data, status} = await api.verifyAccount(body)
        if (status === 200){
            dispatch({type : 'AUTH', data})
            history.push('/')
        }
        
    }catch(err){
        console.log(err.message)
    }
}

export const verify_vendor_account = (body, history) => async (dispatch) =>{
    try{
        const {data, status} = await api.verifyAccountVendor(body)
        if (status === 200){
            dispatch({type : 'AUTH', data})
            history.push('/vendor_shop')
        }
        
    }catch(err){
        console.log(err.message)
    }
}

export const forgot_password = (body, history) => async (dispatch) =>{
    try{
        const {data, status} = await api.forgotPassword(body)
        if (status === 200){
            dispatch({type : 'AUTH', data})
            history.push('/vendor_shop')
        }
        
    }catch(err){
        console.log(err.message)
    }
}