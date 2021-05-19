import axios from 'axios'

// FOR USER_REGISTER
export const startRegisterUser=(values)=>{
   return(dispatch)=>{
       //api call
       axios.post('http://dct-billing-app.herokuapp.com/api/users/register', values)
        .then((response)=>{
            const data=response.data
            if(data.hasOwnProperty('errors')){
                alert(data.message)
            }else{
            console.log(data)
            dispatch(registerData(data))
            alert('successfully created')
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
   }
}
// For USER_LOGIN
export const setUserLogin=(values)=>{
    return(dispatch)=>{
        //api call
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login',values)
            .then((response)=>{
                const data=response.data
                if(data.hasOwnProperty('errors')){
                    alert(data.message)
                } else {
                //console.log(data)
                alert('sucessfully logged in')
                localStorage.setItem('token',`Bearer ${data.token}`)
                dispatch(loginData(data))
                
                
            }
        })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

// FOR USER_DETAILS
export const startGetUser=()=>{
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',{
            headers : {
                Authorization : localStorage.getItem(`token`) 
            }
        })
        .then((response)=>{
            const userData=response.data
            //console.log('userDAta',userData)
            dispatch(getData(userData))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}


export const registerData=(data)=>{
    return{
        type :'REGISTER_DATA',
        payload : data
    }
}

export const loginData=(data)=>{
    return {
        type:'LOGIN_DATA',
        payload : data
    }
}

export const getData=(userData)=>{
    return {
        type : 'USER_DATA',
        payload : userData
    }
}