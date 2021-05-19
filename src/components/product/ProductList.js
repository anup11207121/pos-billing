import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {startGetProduct,startDeleteProduct} from '../../actions/customerAction'
import FilterResults from 'react-filter-search'

const ProductList=(props)=>{
    const {handleEdit} = props
    const [search,setSearch]=useState('')
    const dispatch=useDispatch()

    const products=useSelector((state)=>{
        return state.bill.products
    })

    useEffect(()=>{
        dispatch(startGetProduct())
    },[])

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }

    const handleProductDel=(id)=>{
        const confirm=window.confirm('Are you sure')
        if(confirm){

        dispatch(startDeleteProduct(id))
    }
}
    return (
        <div>
            <h1>Product List</h1>
            {products.length > 0 ? (
                
                <div>
                    <div class="input-group">
                    <div class="form-outline">
                        <input  
                            id="search-focus" 
                            type="search" 
                            id="form1" 
                            class="form-control" 
                            placeholder='search products' 
                            value={search}
                            onChange={handleSearch}/>
                    </div>
                    </div>

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Sl.No</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Pice</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <FilterResults 
                            value={search}
                            data={products}
                            renderResults={(results)=>(
                                <>
                                    {results.map((data,i)=>(
                                        // <React.Fragment key={data._id}>
                                            <tr key={data._id} scope='row'>
                                                <td>{i+1}</td>
                                                <td>{data.name[0].toUpperCase()+data.name.slice(1)}</td>
                                                <td>{data.price}</td>
                                                <td><button onClick={()=>{
                                                    handleEdit(data._id)
                                                    }} className="btn btn-primary">edit</button></td>
                                                <td><button 
                                                    onClick={()=>{
                                                    handleProductDel(data._id)
                                                    }}
                                                    class="btn btn-danger">delete</button></td>
                                            </tr>
                                        // </React.Fragment>
                                    ))}
                                </>
                            )}
                        />
                    </tbody>
                </table>
            </div>
       
            ):(
                <div>
                    <h1>No product Added</h1>
                </div>
            )}
                    </div>
    )
}

export default ProductList