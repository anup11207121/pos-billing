const userInitialState=[]

const userReducer=(state=userInitialState,action)=>{
    switch(action.type ) {
        case 'REGISTER_DATA' : {
            return [{...action.payload}, ...state]
        }
        case 'LOGIN_DATA' :{
            return [action.payload]
        }
        case 'USER_DATA' :{
            return [{...action.payload}]
        }
        default :{
            return [...state]
        }
    }
}
export default userReducer