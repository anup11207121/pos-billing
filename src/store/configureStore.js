import {createStore,combineReducers,applyMiddleware} from 'redux'
import userReducer from '../reducers/userReducer'
import billingReducer from '../reducers/billingReducer'
// import {composeWithDevTools} from  'redux-devtools-extension'
import thunk from 'redux-thunk'

const configureStore=()=>{
    const store= createStore(combineReducers({
            user : userReducer,
            bill : billingReducer
        }), 
       applyMiddleware(thunk)
       )
    return store
}
export default configureStore