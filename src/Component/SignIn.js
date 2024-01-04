import React from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom'
function SignIn() {

  const navigate = useNavigate()

  return (
    <div className='container log '>
      <div className='mt-5'>
        <h1>Sign In</h1>
      </div>
      <div className='my-3'>
      <input className='m-2 p-2 w-50 border border-secondary rounded' type='text' placeholder='Email or Phone Number'></input>
      </div>
      <div className='my-3'>
      <input className='m-2 p-2 w-50 border border-secondary rounded' type='password' placeholder='Password'></input>
      </div>
      <div>
        <button className='btn btn-warning'>Log in</button>
      </div>
      <div className='my-5'>
        <input type='checkbox'className='mx-2'></input><span className=''>Keep me Signed in</span>
      </div>
      <div className='my-2'>
        <a href='' className='forgot'>Forgot Password ?</a>
      </div>
      <div className='my-3'>
        <a href='' className='new'>Create an account</a>
      </div>
    </div>
  )
}

export default SignIn