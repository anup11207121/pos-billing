import React, { useEffect,useState } from 'react'
import {Formik,Field,Form} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import {setUserLogin} from '../../actions/userAction'

const LoginUser=(props)=>{
    const[isSubmitted,setIsSubmitted]=useState(false)
    const {handleAuth} =props
    
    const dispatch=useDispatch()
    const userLogin=useSelector((state)=>{
        return state.user
    })
    
    useEffect(()=>{
        if(isSubmitted){
            handleAuth()
            props.history.push('/dashboard')
    }
    },[userLogin])

    const initialValues={
        email:'',
        password:''
    }
    const validateForm=()=>{
        const validate=Yup.object({
            email : Yup.string()
             .email('invalid email format')
             .required('Required'),

            password : Yup.string().required('Required')
        })
        return validate
    }
    const onSubmit=(values,onSubmitProps)=>{
        setIsSubmitted(true)
        // console.log(values)
        dispatch(setUserLogin(values))
        onSubmitProps.resetForm()
    }
    return (
        <div className='container'>
            
            
                <Formik 
                    initialValues={initialValues}
                    validationSchema={validateForm()}
                    onSubmit={onSubmit}>
                         {(formik) =>(
                             
                                <Form>
                                    <div className='form-wrapper'>
                                    <h2>Login User</h2>
                                    <div className="form-group">
                                    <Field type='text' 
                                        name='email'
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='enter email'
                                        className="form-control"
                                    />
                                    <br/>
                                    {formik.touched.email && 
                                        formik.errors.email && <div>{formik.errors.email}</div>}
                                    </div>
                                    <div className="form-group">
                                    <Field type='text' 
                                        name='password'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='enter your password'
                                        className="form-control"
                                    />
                                    <br/>
                                    {formik.touched.password && formik.errors.password && ( 
                                        <div>{formik.errors.password}</div> 
                                    )}
                                    </div>    
                                    <Field type='submit' className="btn btn-primary" value='Login' id='Login'/>
                                </div>
                                {/* <p>not registered? <a>Login{props.history.push(/register)}</a> </p> */}
                            </Form>
                             
                         )}
                    </Formik>
        </div>
    )
}
export default LoginUser