import React, { useContext, useState } from 'react'
import Input from './Input'
import { btnStyle, container, formContainer, heading } from './Transfer'
import { AccountCntxt } from '../store/AccountContext'


export default function ReqLoan() {
  const{activeCustomer,dispatch} = useContext(AccountCntxt)
  console.log(activeCustomer)
  const[loanAmount,setLoanAmount] = useState('')

  function handleLoanInput(e){
    setLoanAmount(e.target.value)
  }

  function handleReqLoan(e){
    e.preventDefault()

    if(activeCustomer.amount < 1000) return
    
    if(activeCustomer.loan > 0) return

    dispatch({
      type : 'loan',
      payload : loanAmount
    })
  }
  

  return (
    <div className={container}>
      <h3 className={heading}>Request loan</h3>
            <form  className={formContainer}>
               <Input type='number' placeholder='Amount' onChange={handleLoanInput}/>
               <button type ="button" className={btnStyle} onClick={handleReqLoan}>Request</button>
            </form>
    </div>
  )
}
