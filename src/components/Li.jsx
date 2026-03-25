import React from 'react'

export default function Li({children, type}) {
  return (
    <li className={`flex justify-between w-3xs border-1 rounded-sm ${type === 'credit' ? 'bg-green-300': 'bg-red-300'} `}>
      {children}
    </li>
  )
}
