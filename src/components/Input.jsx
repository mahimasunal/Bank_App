
import React from 'react'

export default function Input({type,placeholder,onChange,name}) {
  return (
    <div>
      <input type={type} placeholder={placeholder} className='border outline-0 pl-1 text-sm w-full h-8 mb-5 border-gray-400 rounded-sm shadow-sm' onChange={onChange} name={name}></input>
    </div>
  )
}

