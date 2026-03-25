import React, { useContext, useState } from 'react'
import Input from '../components/Input'
import { AccountCntxt } from '../store/AccountContext'

export const container = 'border rounded py-3 px-4 mb-8'
export const formContainer = 'flex mt-2 gap-2'
export const btnStyle = 'border border-gray-400 h-8 text-sm px-2.5 shadow-sm rounded-sm'
export const heading = 'font-semibold'

export default function Transfer() {
  const{dispatch, activeCustomer} = useContext(AccountCntxt)

  const[transferInfo, setTransferInfo] = useState({
      transferTo: '',
      transferAmount: '',
      password: ''
    })
  
    function handleInput(e){
      const{name,value} = e.target

      setTransferInfo(prev=>{return{
        ...prev, [name]:value
      }})
    }

    function handleTransferFund(e){
      e.preventDefault()
      if(!transferInfo.transferTo ||!transferInfo.transferAmount) return

      if(activeCustomer.password !== transferInfo.password) return

      dispatch({
        type:'fundTransfer',
        payload : {transferTo : transferInfo.transferTo, transferAmount : transferInfo.transferAmount}
      })
    }

  return (
    <div className={`${container}`}>
      <h3 className={heading}>Transfer money</h3>
      <form action="" className={formContainer} onSubmit={handleTransferFund}>

        <Input type='text' placeholder='Transfer to' name='transferTo' onChange={handleInput}/>

         <Input type='number' placeholder='Amount' name='transferAmount' onChange={handleInput}/>

          <Input type='password' placeholder='password' name='password' onChange={handleInput}/>

         <button type = 'submit' className={btnStyle}>Transfer</button>
      </form>
    </div>
  )
}
