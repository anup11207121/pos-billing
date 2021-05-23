import React from 'react'
import {Formik,Field,Form} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import {setCustomerDetails} from '../../actions/customerAction'

const Customers=(props)=>{
    const {toggle,handleToggle}=props
    const dispatch=useDispatch()

    // console.log('custemail',custEmail)

    const initialValues={
        name : '',
        mobile : '',
        email : ''
    }

    const validateForm=()=>{
        const validate=Yup.object({
            name : Yup.string()
            .min(5,'must be equal to 5 characters and above')
            .required('Required'),
            mobile : Yup.string()
                        .required('Required'),
            email : Yup.string().email('Email is invalid').required('Required'),
        })
        return validate
    }

    const onSubmit=(values,onSubmitProps)=>{
        // console.log(values)
                
        dispatch(setCustomerDetails(values))
    
    
    onSubmitProps.resetForm()
}

    return (
        <div class='container'>
            <Formik
                initialValues={initialValues}
                validationSchema={validateForm()}
                onSubmit={onSubmit}>
                    {(formik)=>(
                
            <Form>
                {/* <h1>Cutomer Form</h1> */}
                <div class="form-group form-group-sm">
                <div class='form-row'>
                <div class="col-lg-3 col-lg-offset-4">
                <Field 
                    type='text' 
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='name' 
                    class="form-control"
                />
                {formik.touched.name && 
                    formik.values.name.length < 5 &&(
                    formik.errors.name && <div>{formik.errors.name}</div> 
                )}
                </div>
                <div class="col-lg-3 col-lg-offset-4">
                <Field 
                    type='text' 
                    name='mobile'
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='mobile'
                    class="form-control"
                />
                {formik.touched.mobile && formik.errors.mobile && (
                    <div>{formik.errors.mobile}</div>
                )}
                </div>
                <div class="col-lg-3 col-lg-offset-4">
                <Field
                    type='text'
                    name='email'
                    placeholder='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    class="form-control" 
                />
                {formik.touched.email && formik.errors.email && ( 
                    <div>{formik.errors.email}</div> 
                )}
                </div>
                <div>
                
                
                    <div>
                        <Field type='submit'className="btn btn-primary" value='Add' id='Add' />
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

export default Customers