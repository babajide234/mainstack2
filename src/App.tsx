import './App.css'
import Graph from './components/Graph'
import { AlertCircle } from 'lucide-react'
import Transaction from './components/Transaction'
import {getWalletDetails} from './functions.ts';
import {useQuery} from '@tanstack/react-query'

function App() {
  const  { data: wallet, isLoading }= useQuery({ queryKey: ['wallet'], queryFn: getWalletDetails })


  return (
      <div className=" pt-[64px] w-[1160px] mx-auto">
        <div className=" flex w-full justify-between mb-[118px]">
            <Graph balance={isLoading ?  '0.00': wallet.balance }/>
            <div className=" w-[271px] flex flex-col gap-[34px] ">
              <AccountDetails name="Ledger Balance" balance={`USD ${isLoading ?  '0.00': wallet.ledger_balance }`}/>
              <AccountDetails name="Total Payout" balance={`USD ${isLoading ?  '0.00': wallet.total_payout }`}/>
              <AccountDetails name="Total Revenue" balance={`USD ${isLoading ?  '0.00': wallet.total_revenue }`}/>
              <AccountDetails name="Pending Payout" balance={`USD ${isLoading ?  '0.00': wallet.pending_payout }`}/>
            </div>
        </div>
        <Transaction/>
      </div>
  )
}
interface Account {
  name:string,
  balance:string
}
const AccountDetails=({ name, balance}:Account)=>{
  return(
    <div className=" flex flex-col gap-2">
      <div className=" text-gray-500 flex items-center justify-between">
          <p className=" text-sm">{name}</p>
          <AlertCircle size={14}/>
      </div>
      <h2 className=" text-[28px] font-bold leading-9">{balance}</h2>
    </div>
  )
}
export default App
