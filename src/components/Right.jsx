import React from 'react'
import Transfer from './Transfer'
import ReqLoan from './ReqLoan'
import PayLoan from './PayLoan'

export default function Right() {

  return (
    <div>
      <div>

        <Transfer></Transfer>
      </div>
        <div>
            <ReqLoan></ReqLoan>
        </div>
        <div>
          <PayLoan></PayLoan>
        </div>
    </div>
  )
}
