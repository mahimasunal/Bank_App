import React, { useContext } from "react"
import { Link, useNavigate} from "react-router-dom"
import { AccountCntxt } from "../store/AccountContext"



export default function Home(){
    const navigate = useNavigate()
   const{loggedInUserId,dispatch,activeCustomer} = useContext(AccountCntxt)
    return(
        <header className="border flex justify-between p-1 h-11 items-center">
            <h2 className="font-semibold">
                Logo
                </h2>
            
            <nav>
                {!loggedInUserId ?  <Link to={'/login'} className="border px-2 font-semibold py-0.5 rounded-sm cursor-pointer ">Login</Link> : <div className="flex gap-5">
                     <p>Welcome {activeCustomer.username}</p>
                    <button onClick={()=>{
                    dispatch({
                        type:'logout'
                    })
                    navigate('/login')
                }}>LogOut</button>
                </div>
}
               
            </nav>
            
        </header>
    )
}