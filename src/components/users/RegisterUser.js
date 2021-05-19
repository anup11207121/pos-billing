import React, { useEffect, useState } from 'react'
import {Field, Formik, Form} from 'formik'
import * as Yup from 'yup'
import {startRegisterUser} from '../../actions/userAction'
import {useDispatch,useSelector} from 'react-redux'

const RegisterUser=(props)=>{

    const [isSubmitted,setIsSubmitted]=useState(false)
    const dispatch=useDispatch()
    const userData=useSelector((state)=>{
        return state.user
    })

    useEffect(()=>{
        if(isSubmitted){
            props.history.push('./login')
        }
    },[userData])

    const initialValues={
        username:'',
        email:'',
        password:'',
        businessName:'',
        address :''
    }

    const validateForm=()=>{
        const validate=Yup.object({
            username : Yup.string()
                .min(5,'must be equal to 5 characters and above')
                .required('Required'),
            
            email : Yup.string().email('Email is invalid').required('Required'),
            password : Yup.string().min(8,'must be equal to or more than 8 characters'),
            businessName : Yup.string().required('Required'),
            address : Yup.string()

        })
        return validate
    }

    const onSubmit=(values,onSubmitProps)=>{
        onSubmitProps.resetForm()
        setIsSubmitted(true)
        //console.log(values)
        dispatch(startRegisterUser(values))
        
    }
    return (
        <div class='container'>
          
            <Formik
                initialValues={initialValues}
                validationSchema={validateForm()}
                onSubmit={onSubmit}>
                    {(formik) =>  (
            
                <Form>
                <div className="form-wrapper">
                <h1> RegisterUser </h1>  
                    <div className="form-group">
                <Field type='text' 
                    name='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='enter username'
                    className="form-control"
                />
                
                {formik.touched.username && 
                    formik.values.username.length < 5 &&
                    formik.errors.username && <div>{formik.errors.username}</div> }
                </div>
                <div className="form-group">
                <Field type='text' 
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='enter your email-id'
                    className="form-control"
                />
                {formik.touched.email && formik.errors.email && ( 
                    <div>{formik.errors.email}</div> 
                )}
                </div>
                <div className="form-group">
                <Field type='password' 
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='enter your password'
                    className="form-control"
                />
                {formik.touched.password &&
                    formik.values.password.length < 8 &&
                    formik.errors.password && ( 
                    <div>{formik.errors.password}</div> 
                )}   
                </div>
                <div className="form-group">
                 <Field type='text' 
                    name='businessName'
                    value={formik.values.businessName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='enter your businessName'
                    className="form-control"
                />
                {formik.touched.buisnessName && formik.errors.buisnessName && ( 
                    <div>{formik.errors.buisnessName}</div> 
                )}
                </div>
                <div className="form-group">
                <Field type='text' 
                    name='address'
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='enter your address'
                    className="form-control"
                />
                {formik.touched.address && formik.errors.address && ( 
                    <div>{formik.errors.address}</div> 
                )}
                </div>
                <div className="form-group">
                    <Field type='submit' className="btn btn-primary" value='Register' id='submit'/>
                </div>
            </div>
        </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterUser