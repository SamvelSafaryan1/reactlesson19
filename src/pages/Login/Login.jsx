import React from 'react'
import {Formik, Form, Field} from 'formik'
import { useNavigate } from 'react-router-dom'
import Register from '../Register/Register'
import './Login.css'

function Login({users}){
    let navigate = useNavigate()
    let authUser = (value, users) => {
        let user = users.find((user) => user.email === value.email)
        if(user){
            let bool = user.password === value.password 
            if(bool){
                navigate('/profile', {state : user})
            }
        }else{
            navigate('/register')
        }
    }

    return (
        <div>
            <Formik
                initialValues={{
                    email : "",
                    password : ''
                }}
                onSubmit={(value) => authUser(value, users)}
            >
                <Form>
                    <Field name='email' placeholder='email'/>
                    <Field name='password' placeholder='password'/>
                    <button type='submit' className='login'>Login</button>
                    <button className='reg' onClick={<Register/>}>Register</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login
