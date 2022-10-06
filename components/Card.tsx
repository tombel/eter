import React from 'react'

export function Card({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="bg-white rounded-3xl shadow-lg w-[500px] min-h-[300px] font-base p-20 flex flex-col items-center">
      <p className="font-base text-lg	text-grey-200 font-medium text-center mb-32 mt-20">
        CONNECT YOUR WALLET
      </p>
      {children}
    </div>
  )
}
