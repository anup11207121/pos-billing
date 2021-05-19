import React,{useState} from 'react'
import {Formik,Field,Form} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import {startAddProduct,startEditProduct} from '../../actions/customerAction'
 
const AddProduct=(props)=>{
    const {toggle,handleToggle,name,price,_id } =props
    const initialValues={
        name : name?name:'',
        price : price?price:0
    }
    const dispatch=useDispatch()

    const validationSchema=()=>{
        const validate=Yup.object({
            name : Yup.string(),
            price : Yup.number()
        })
        return validate
    } 

    const onSubmit=(values,onSubmitProps)=>{
        if(toggle){
            // console.log('id',_id)
            dispatch(startEditProduct(_id,values))
        }else{
            dispatch(startAddProduct(values))
        }
        onSubmitProps.resetForm()
        }
        
    return(
        <div class='container'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema()}
                onSubmit={onSubmit}>
                    {(formik)=>(
                
            <Form class="form-horizontal justify-content-center">
                
                <div class="form-group form-group-sm">
                <div class='form-row'>
                {/* <div class="col-lg-4 col-lg-offset-4"> */}
                <div class="col-lg-5 col-lg-offset-4">
                <Field 
                    type='text' 
                    placeholder='enter name' 
                    value={formik.values.name} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    name='name'
                    class="form-control"
                />
                {formik.touched.name && (
                    formik.errors.name && <div>{formik.errors.name}</div>
                )}
                </div>
                <div class="col-lg-1 col-lg-offset-4">
                <Field 
                    type='number' 
                    placeholder='enter price' 
                    value={formik.values.price} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    name='price'
                    class="form-control"
                />
                {formik.touched.price && (
                    formik.errors.price && <div>{formik.errors.price}</div>    
                )}
                </div>
                
                    <div>
                {toggle ? (
                    <div>
                        <Field 
                        type='submit' 
                        className="btn btn-primary"
                        value='update'      
                        id='update'
                    />
                    
                    <Field 
                        type='submit' 
                        className="btn btn-primary" 
                        id='cancel'
                        value='cancel'
                        onClick={()=>{
                            handleToggle(false)
                        }}    
                    />
                    </div>
                ):(
                    <div>    
                        <Field 
                            type='submit' 
                            className="btn btn-primary" 
                            value='Add'
                            id='Add'
                        />
                    </div>    
                )}
                </div>
                </div>
        </div>        
           
        </Form>
        
        )}
            </Formik>
        </div>
    )
}

export default AddProduct