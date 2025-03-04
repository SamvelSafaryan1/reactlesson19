import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register({val}){
  let navigate = useNavigate()
  return(
    <div className='register'>
      <Formik
        initialValues={{
          login : "",
          email : "",
          password : "",
          tel: "",
          age: ""
        }}
        

        
      >
        <Form>
          <Field placeholder='login' name='login'/>
          <Field placeholder='email' name='login'/>
          <Field placeholder='password' name='password'/>
          <Field placeholder='tel' name='tel'/>
          <Field placeholder='age' name='number'/>
          <button type='submit' className='log'>Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Register
