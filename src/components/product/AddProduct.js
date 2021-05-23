import React,{useState} from 'react'
import {Formik,Field,Form} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import {startAddProduct,startEditProduct} from '../../actions/customerAction'
 
const AddProduct=(props)=>{
    const {toggle,handleToggle} =props
    const initialValues={
        name : '',
        price : 0
    }
    const dispatch=useDispatch()

    const validationSchema=()=>{
        const validate=Yup.object({
            name : Yup.string('Enter Product name')
                    .required('product name is required'),
            price : Yup
                    .number('Enter the price of the Product')
                    .required('Price is required')
        })
        return validate
    } 

    const onSubmit=(values,onSubmitProps)=>{
        onSubmitProps.resetForm()
        dispatch(startAddProduct(values))        
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
                        <Field 
                            type='submit' 
                            className="btn btn-primary" 
                            value='Add'
                            id='Add'
                        />
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