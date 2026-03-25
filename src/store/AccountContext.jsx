import React, { useReducer } from 'react'
import { createContext } from "react";
import { customers } from '../utils/fakeData';
import {AccountReducer} from './AccountReducer';

export const AccountCntxt = createContext();

const initialState = {
    loggedInUserId: null,
    activeCustomer : '',
    customers,
    sessionTimeLeft: 180
}


export default function AccountContext({children}) {

   const[{loggedInUserId,activeCustomer,customers}, dispatch] = useReducer(AccountReducer, initialState)
  return (
    <AccountCntxt.Provider value={{loggedInUserId,activeCustomer,customers, dispatch}}>
      {children}
    </AccountCntxt.Provider>
  )
}
