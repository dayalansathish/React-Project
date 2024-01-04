import React from 'react'
import './Createaccount.css'
import { useNavigate } from 'react-router-dom'


function Createaccount() {

    const navigate = useNavigate()

  return (
    <div className='container-fluid bg-secondary create'>
      <div className='container w-50 py-3 bg-white border rounded-5'>
        <h1 className='text-center'>Create Your React ID</h1>
        <hr></hr>
        <div className='text-center'>
          <p>React ID is all you need to access all React services.
            Already have an React ID?</p><a href='' onClick={()=>navigate('/login')}>Log in {'>'} </a>
        </div>
        <div className='row m-3'>
        <div className='col-6'>
                        <label class="form-label p-2">First Name :</label>
                        <input type="text" class="form-control text-black-50 p-2" placeholder='Firstname'/>
                    </div>
                    <div className='col-6'>
                        <label class="form-label p-2">Last Name :</label>
                        <input type="text" class="form-control text-black-50 p-2" placeholder='Lastname'/>
                    </div>
                    <div className='col-6'>
                        <label class="form-label p-2"> Email :</label>
                        <input type="email" class="form-control text-black-50 p-2" placeholder='123@gmail.com'/>
                    </div>
                    <div className='col-6'>
                        <label class="form-label p-2"> Password :</label>
                        <input type="password" class="form-control text-black-50 p-2" placeholder='Password'/>
                    </div>
                    <div className='d-flex justify-content-evenly mt-3'>
                      <button className='btn border border-secondary text-primary'>Cancel</button> 
                      <button className='btn btn-primary'>Submit</button>
                    </div>
        </div>

      </div>

    </div>
  )
}

export default Createaccount