
import React, { useContext, useState } from 'react'
import Input from './Input'
import {customers} from '../utils/fakeData'
import { Navigate, useNavigate } from 'react-router-dom'
import { AccountCntxt } from '../store/AccountContext'
 
export default function LoginForm() {
const {dispatch} = useContext(AccountCntxt)
    const navigate = useNavigate()

    const[cred, setCred] = useState({
        username : '',
        password : ''
    })

    function handleInput(e){
       const{name,value} = e.target
        setCred(prev=>{return{...prev, [name]:value}})
    }

    function handleLogin(e){
       e.preventDefault()

       const cusotmerFound = customers.find(customer=> customer.username === cred.username)
       if(!cusotmerFound) return

       if(cred.password !== cusotmerFound.password) return
       dispatch({
        type : 'loggedIn',
        payload : cusotmerFound
       })
       navigate('/dashboard')
    }


  return (
    <div className='flex justify-center mt-32 h-60'>
    <div className='border w-80 py-3.5 px-6'>
      <h2 className='text-center mb-5 font-semibold text-xl'>LogIn</h2>
      <form onSubmit={handleLogin}>
        <Input type="text" placeholder="username" onChange = {handleInput} name='username'/>

        <Input type="password" placeholder="password" onChange = {handleInput} name='password' />
        
        <div className='border px-2 font-semibold py-0.5 cursor-pointer text-center'>

        <button>login</button>
        </div>
      </form>
    </div>
    </div>
  )
}
