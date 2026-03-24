import React, { useContext } from 'react'
import Header from '../components/Header'
import Left from '../components/Left'
import Right from '../components/Right'
import { AccountCntxt } from '../store/AccountContext'

export default function Dashboard() {
  const {activeCustomer}= useContext(AccountCntxt)
  
  return (
    <div>
      <Header></Header>
      <main className='border w-3/5 mx-auto mt-5 p-3'>
        <div className='flex justify-between mb-6'>
          <p>Current balance</p>
          <h3>{activeCustomer.amount}</h3>
        </div>
        <div className='grid grid-cols-2'>
          <Left></Left>
          <Right></Right>
        </div>
      </main>
    </div>
  )
}
