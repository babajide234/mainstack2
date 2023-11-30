import React from 'react'

interface Balance {
    balance: string
}
const Graphs = ({balance}:Balance) => {
  return (
    <div className=" w-[760px] ">
        <div className=" flex items-center gap-16">
            <div className="">
                <p className=" font-medium text-sm capitalize text-gray-500">Available Balance</p>
                <h2 className=" font-bold text-4xl ">USD {balance}</h2>
            </div>
            <button className=" px-7 py-[14px] rounded-full bg-[#131316] text-white font-semibold">Withdraw</button>
        </div>
        <div className=" w-full h-[256px] border-b border-gray-300 pb-5 mb-5 flex items-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="767" height="178" viewBox="0 0 767 178" fill="none">
            <path d="M1 177L166.916 21.336C211.748 -20.7264 285.462 6.79004 292.871 67.8171V67.8171C293.287 71.2484 293.981 74.6685 294.939 77.9895V77.9895C308.165 123.839 364.75 140.125 400.326 108.322L480.44 36.7048C538.095 -14.8352 627.475 -6.14781 674.126 55.5303L766 177" stroke="#FF5403" stroke-linecap="round"/>
            </svg>
        </div>
        <div className=" flex items-center justify-between">
            <p className=" font-medium text-sm text-gray-500">Apr 1 ,  2022</p>
            <p className=" font-medium text-sm text-gray-500">Apr 30 ,  2022</p>
        </div>
    </div>
  )
}

export default Graphs