const customerInitialState={
    customers:[],
    products:[],
    customerData:{},
    productData:{},
    billing:[],
    billCustomerData:{},
    cart:[],
    billData:{}
}

const billingReducer=(state= customerInitialState,action)=>{
    switch(action.type){
        
        
// FOR CUSTOMER DATA
        
        case 'ADD_CUSTOMER' : {
            return {...state, customers :[...state.customers,action.payload]}
        }
        case 'CUSTOMER_DETAILS' : {
            return {...state, customers:[...action.payload]}
        }
        case 'REMOVE_CUSTOMER' : {
            return {
                ...state,
                customers : state.customers.filter((ele)=>{
                    return ele._id !== action.payload._id
                })
            }
        }
        case 'SINGLE_CUSTOMER' : {
            return {...state, customerData : action.payload }
        }

        case 'EDIT_CUSTOMER' :{
            return {
                ...state,
                customers : state.customers.map((ele)=>{
                    if(ele._id===action.payload._id){
                        return { ...ele, ...action.payload }
                    }else{
                        return {...ele}
                    }
                })
            }
        }


// FOR PRODUCT DATA

        case 'GET_PRODUCT' :{
            return {...state, products:[...action.payload]}
        }

        case 'ADD_PRODUCT' :{
            return {...state, products: [...state.products , action.payload]}
        }

        case 'DELETE_PRODUCT' : {
            return {
                ...state,
                products : state.products.filter((ele)=>{
                    return ele._id !== action.payload._id
                })
            }
        }

        case 'SINGLE_PRODUCT' : {
            return { ...state, productData: action.payload }
        }

        case 'EDIT_PRODUCT' :{
            return{
                ...state,
                products : state.products.map((ele)=>{
                    if(ele._id===action.payload._id){
                    return { ...ele , ...action.payload }
                    }else{
                        return {...ele}
                    }
                })
            }
        }

// FOR BILLING 

        case 'GET_BILL' : {
            return {...state,billing:[...action.payload]}
        }

        case 'ADD_BILL': {
            return { ...state, billing: [...state.billing, action.payload ] }
        }

        case 'SINGLE_BILL' :{
            return {...state , billData: action.payload  }
        }

        case 'DELETE_BILL' : {
            // console.log('action',action.payload)
            return {
                ...state , billing : state.billing.filter((ele)=>{
                    return ele._id !== action.payload._id
                })
            }
        }

// For BILL Customer Data

        case 'BILL_CUSTOMER_DATA' :{
            // console.log('payload',action.payload)
            return {...state , billCustomerData: {...action.payload} } 
        }

        case 'GET_BILLS_DATA' : {
            return {...state, billCustomerData : {...action.payload} }
        }

        case 'CLEAR_BILL_CUST_DATA' :{
            return {...state , billCustomerData :{} }
        }

        



// For Cart ITems

        case 'ADD_TO_CART' : {
            console.log('payload',action.payload)
            return {...state, cart: [...state.cart, action.payload]}
        }
        
        case 'GET_CART_ITEMS' :{
            return {...state , cart : [...state.cart] }
        }

        case 'REMOVE_CART_DATA' : {
            return {
                ...state,
                cart : state.cart.filter((ele)=>{
                    return ele.products._id !== action.payload
                })
            }
        }

        case 'CLEAR_CART' :{
            return {...state, cart : [] }
        }

        default : {
            return state
        }
    }
}

export default billingReducer