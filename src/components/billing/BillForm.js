import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {startGetCustomers, billCustData} from '../../actions/customerAction'
import SelectSearch from 'react-select-search'

const BillForm=(props)=>{
    const [name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    // const [date,setDate] = useState('')

    const dispatch=useDispatch()

    const customers=useSelector((state)=>{
        return state.bill.customers
    })

    useEffect(()=>{
        dispatch(startGetCustomers())
    },[])

    const addData=(number)=>{
        const customerData=customers.find((ele)=>{
            if(number === ele.mobile){
                return ele
            }
        })
        console.log('customerData',customerData)
        return customerData
    }

    const handleChange=(e)=>{
        if(e.target.name === 'mobile'){
            setMobile(e.target.value)
        }
    }

    const handleBlur=()=>{
        if(mobile!== ''){
            const data=addData(mobile)
            setName(data.name)
        }else{
            setName('')
        }
    }

    const handleSubmit=(e)=>{
        const data=addData(mobile)
        const formData={
            customers : data._id,
            ...data
        }
         console.log('formData',formData)
        dispatch(billCustData(formData))
        e.preventDefault()
        setName('')
        setMobile('')
    }
    return (
        <div class='container'>
            <form onSubmit={handleSubmit} class="form-horizontal justify-content-center">
                
            <div class="form-group form-group-sm">
            <div class='form-row'>
                
                <div class="col-lg-3 col-lg-offset-4">
                <input 
                    type='text'
                    value={mobile}
                    name='mobile'
                    placeholder='enter mobile no**'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="form-control"
                />
                </div>
                {/* <SelectSearch 
                    options={customers,map((ele)=>{
                        return <op
                
                    renderOption={()=>{
                        customers.map((ele)=>{
                            return <input mobile={ele.mobile}/>
                        })
                    }}
                    type='group'
                    items={customers.mobile}
                    id='customers'
                    inputValue={mobile}    
                    value={customers._id} 
                    name='mobile' 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='enter customer'
                /> */}

                <div class="col-lg-3 col-lg-offset-4">
                <input 
                    type='text'
                    value={name}
                    name='name'
                    placeholder='enter customer name'
                    class="form-control" 
                />
                </div>
                <input type='submit' value='Add' className="btn btn-primary" />
                </div>
                </div>
            </form>
        </div>
    )
}

export default BillForm