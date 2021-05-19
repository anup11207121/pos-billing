import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {setRemoveCustomer,startGetCustomers} from '../../actions/customerAction'
import FilterResults from 'react-filter-search'

const CustomerList=(props)=>{
    const [search,setSearch]=useState('')
    const {handleEdit}=props
  
    const dispatch=useDispatch()
  
    const customers=useSelector((state)=>{
        return state.bill.customers
    })
    useEffect(()=>{
        dispatch(startGetCustomers())
    },[])

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }
    const handleDelete=(id)=>{
        const confirm=window.confirm('Are you Sure')
        if(confirm){
        dispatch(setRemoveCustomer(id))
    }
}
    return(
        <div>
            <h2>Customer List</h2>
            
            {customers.length > 0 ? (
                <div>
                    <div class="input-group">
                    <div class="form-outline">
                        <input  
                            id="search-focus" 
                            type="search" 
                            id="form1" 
                            class="form-control" 
                            placeholder='search customers' 
                            value={search}
                            onChange={handleSearch}/>
                    </div>
                    {/* <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button> */}
                    </div>

                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Sl.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Email</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <FilterResults 
                                value={search}
                                data={customers}
                                renderResults={(results)=>(
                                    <>
                                        {results.map((data,i)=>(
                                            <tr key={data._id}>
                                                <td>{i+1}</td>
                                                <td>{data.name[0].toUpperCase()+data.name.slice(1)}</td>
                                                <td>{data.mobile}</td>
                                                <td>{data.email}</td>
                                                <td><button onClick={()=>{
                                                    handleEdit(data._id)
                                                    }} class="btn btn-primary">Edit</button></td>
                                                <td><button onClick={()=>{
                                                    handleDelete(data._id)
                                                    }} class="btn btn-danger">Delete</button></td>        

                                            </tr>
                                        ))}
                                    </>
                                )}  
                            />
                        </tbody>
                    </table>
                    
                </div>
            ) : (
                <div>
                     <h2>No Customers Added</h2>
                </div>
            )}
        </div>
    )
}

export default CustomerList