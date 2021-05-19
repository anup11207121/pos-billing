import React,{useState} from 'react'
import {Formik,Field,Form} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import {startEditProduct,clearProductData} from '../../actions/customerAction'
 
const EditProduct=(props)=>{
    const {toggle,handleToggle,name,price,_id } =props
    const initialValues={
        name : name,
        price : price
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
            onSubmitProps.resetForm()
            dispatch(startEditProduct(_id,values))
            handleToggle(false)
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
                            dispatch(clearProductData())
                        }}    
                    />
                    </div>
                </div>
                </div>
        </div>        
           
        </Form>
        
        )}
            </Formik>
        </div>
    )
}

export default EditProduct