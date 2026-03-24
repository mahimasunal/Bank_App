import React from 'react'

export default function Li({children, type}) {
  return (
    <li className={`w-3xs border-1 rounded-sm ${type === 'debit' ? 'bg-green-300': 'bg-red-300'}`}>
      {children}
    </li>
  )
}
