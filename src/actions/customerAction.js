import axios from 'axios'

//ADD CUSTOMER
export const setCustomerDetails=(values)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/customers', values, {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
            .then((response)=>{
                const result=response.data
                //console.log(result)
                dispatch(addCustomer(result))
                alert('Customer Added Succesfully')
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}
//GET Customer Details
export const startGetCustomers=()=>{
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const getCustomer=response.data
            //console.log(getCustomer)
            dispatch(customerDetais(getCustomer))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

//REMOVE CUSTOMER 
export const setRemoveCustomer=(id)=>{
    return(dispatch)=>{
        // const confirmRemove= window.confirm('Are you sure')
        // if(confirmRemove){
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const remove=response.data
            alert('delete succesfully')
            dispatch(removeCustomer(remove))
        })
        .catch((err)=>{
            alert(err.message)
        })
    // }
    }
}
//GET SINGLE USER
export const startSingleCustomer=(id)=>{
    return (dispatch)=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result=response.data
            console.log('result',result)
            dispatch(singleCustomer(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

//EDIT CUSTOMER
export const startEditCustomer=(id,values)=>{
    return (dispatch)=>{
        console.log('id',id)
        console.log('values', values)
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,values,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const editResult=response.data
           // console.log('edit',editResult)
            dispatch(editCustomer(editResult))
            alert('Data update sucessfully')
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

//GET PRODUCTS
export const startGetProduct=()=>{
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/products',{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const getResult=response.data
            // console.log('getPRoduct',getResult)
            dispatch(getProduct(getResult))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
} 

// ADD PRODUCT
export const startAddProduct=(values)=>{
    return (dispatch)=>{
        axios.post(`http://dct-billing-app.herokuapp.com/api/products`,values,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const addResult=response.data
            dispatch(addProduct(addResult))
            alert('succesfully product Added')
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

//DELETE PRODUCT
export const startDeleteProduct=(id)=>{
    return(dispatch)=>{
        // const confirmRemove=window.confirm('Are you sure')
        // if(confirmRemove){
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const deleteResult=response.data
            alert('succesfully deleted')
            dispatch(deleteProduct(deleteResult))
        })
        .catch((err)=>{
            alert(err.message)
        })
    // }
    }
}

//GET SINGLE PRODUCT
export const startSingleProduct=(id)=>{
    return (dispatch)=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const data=response.data
            dispatch(getSingleProduct(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

//EDIT PRODUCT
export const startEditProduct=(id,values)=>{
    return(dispatch)=>{
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`,values,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const data=response.data
            dispatch(editProduct(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

//GET BILLS
export const startGetBill=()=>{
    return(dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/bills',{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const data=response.data
            dispatch(getBill(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

//ADD BILL
export const startAddBill=(formBill)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/bills',formBill,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const data=response.data
            console.log('bill',data)
            dispatch(addBill(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

//GET SINGLE BILL
export const startSingleBill=(id)=>{
    return(dispatch)=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const data=response.data
            // console.log('single bill', data)
            dispatch(singleBill(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

// DELETE BILL
export const startDeleteBill=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const data=response.data
            // console.log(data)
            dispatch(deleteBill(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
} 


export const addCustomer=(result)=>{
    return {
        type : 'ADD_CUSTOMER',
        payload : result
    }
}

export const customerDetais=(getCustomer)=>{
    return{
        type : 'CUSTOMER_DETAILS',
        payload : getCustomer
    }
}

export const removeCustomer=(remove)=>{
    return{
        type : 'REMOVE_CUSTOMER',
        payload : remove
    }
}

export const singleCustomer=(result)=>{
    return{
        type : 'SINGLE_CUSTOMER',
        payload : result
    }
}

export const editCustomer=(editResult)=>{
    return{
        type : 'EDIT_CUSTOMER',
        payload : editResult
    }
}

export const clearCustData=()=>{
    return {
        type : 'CLEAR_CUST_DATA'
    }
}

export const getProduct=(getResult)=>{
    return {
        type : 'GET_PRODUCT',
        payload : getResult
    }
}

export const addProduct=(addResult)=>{
    return {
        type : 'ADD_PRODUCT',
        payload : addResult
    }
}

export const deleteProduct=(deleteResult)=>{
    return {
        type : 'DELETE_PRODUCT',
        payload : deleteResult
    }
}

export const getSingleProduct=(data)=>{
    return{
        type : 'SINGLE_PRODUCT',
        payload : data
    }
}

export const editProduct=(data)=>{
    return {
        type : 'EDIT_PRODUCT',
        payload : data
    }
}

export const clearProductData=()=>{
    return {
        type : 'CLEAR_PRODUCT_DATA'
    }
}

export const getBill=(data)=>{
    return {
        type : 'GET_BILL',
        payload : data
    }
}

export const addBill=(data)=>{
    return {
        type: 'ADD_BILL',
        payload : data
    }
}

export const singleBill=(data)=>{
    return{
        type:'SINGLE_BILL',
        payload : data
    }
}

export const deleteBill=(data)=>{
    return{
        type : 'DELETE_BILL',
        payload :data
    }
}

//BillcustomerData
export const billCustData=(data)=>{
    return {
        type : 'BILL_CUSTOMER_DATA',
        payload : data
    }
}

//Add To Cart

export const addToCart=(data)=>{
    return {
        type : 'ADD_TO_CART',
        payload:data
    }
}

export const getCartItems=()=>{
    return {
        type : 'GET_CART_ITEMS'
    }
}

export const getBillCustomerData=()=>{
    return {
        type : 'GET_BILLS_DATA'
    }
}

export const removeCartData=(id)=>{
    return {
        type : 'REMOVE_CART_DATA',
        payload : id
    }
}

export const clearCart=()=>{
    return {
        type : 'CLEAR_CART'
    }
}

export const clearBillCustData=()=>{
    return {
        type : 'CLEAR_BILL_CUST_DATA'
    }
}

// export const getBillData=(data)=>{
//     return {
//         type : 'GET_NEWBILL_DATA',
//         payload : data
//     }
// }