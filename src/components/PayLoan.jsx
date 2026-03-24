import React, { useContext, useState } from 'react'
import { btnStyle, container, formContainer, heading } from './Transfer'
import Input from './Input' 
import { AccountCntxt } from '../store/AccountContext'

export default function PayLoan() {
    const{dispatch, activeCustomer} = useContext(AccountCntxt)
    const[payLoanAmt, setpayLoanAmt] = useState('')

    function handlePayLoanInput(e){
        setpayLoanAmt(e.target.value)
    }
    
    function handlePayLoanBtn(e){
        e.preventDefault();
        
        if(activeCustomer.amount < payLoanAmt) return
        
        // if(activeCustomer.loan <= 0) return

                                                                      

        dispatch({
            type : 'payLoan',
            payload : payLoanAmt
        })
    }

  return (
   <div className={container}>
         <h3 className={heading}>Request loan</h3>
               <form  className={formContainer} onSubmit={handlePayLoanBtn}>
                  <Input type='number' placeholder='Amount' onChange={handlePayLoanInput}/>

                  <button className={btnStyle} >Pay</button>
               </form>
       </div>
  )
}
