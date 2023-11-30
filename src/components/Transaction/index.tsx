import { Download,ChevronDown,MoveDownLeft,MoveUpRight } from 'lucide-react';
import {getTransactions} from '../../functions.ts';
import {useQuery} from '@tanstack/react-query'

interface TransactionItem {
    amount: number;
    metadata: {
      name: string;
      type: string;
      email: string;
      quantity: number;
      country: string;
      product_name: string;
    };
    payment_reference: string;
    status: string;
    type: string;
    date: string;
}
const Transaction = () => {
    const  { data: transactions, isLoading }= useQuery({ queryKey: ['transactions'], queryFn: getTransactions })

  return (
    <div className=" w-full ">
        <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8">
            <div className="">
                <h2 className=" text-2xl font-bold capitalize leading-8">{isLoading ? 0 : transactions.length} Transactions</h2>
                <p className=" text-sm text-gray-500">Your transactions for the last 7 days</p>
            </div>
            <div className="flex items-center gap-3">
                <button className=" px-[30px] py-3 rounded-full bg-gray-200 flex items-center gap-3">Filter <ChevronDown size={14}/></button>
                <button className=" px-[30px] py-3 rounded-full bg-gray-200 flex items-center gap-3">Export List <Download size={14}/></button>
            </div>
        </div>

        <div className=" flex flex-col gap-6">
            {
                isLoading ? null:
                transactions.map((item:TransactionItem,index:number)=>(
                    <Trnx 
                        key={index} 
                        type={item.type} 
                        status={item.status}
                        metadata={item.metadata}
                        amount={item.amount}
                        date={item.date}
                    />
                ))
       
            }

        </div>
    </div>
  )
}

interface tranx {
    amount: number;
    type: string;
    status: string;
    metadata:{
        name: string;
        type: string;
        email: string;
        quantity: number;
        country: string;
        product_name: string;
    };
    date: string;

}

const Trnx = ({ type, status,metadata,amount,date }:tranx)=> {

    const typecolor= `
        ${type == 'deposit' && 'bg-[#E3FCF2] text-[#075132]'}
        ${type == 'withdrawal' && 'bg-[#F9E3E0] text-[#961100]'}
    `

    return(
        <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-[14px]">
                <span className={`w-12 h-12 rounded-full flex items-center justify-center ${typecolor}`}>
                    {  type == 'deposit' && <MoveDownLeft />}
                    {  type == 'withdrawal' && <MoveUpRight />}
                </span>
                <div className="flex flex-col justify-between gap-1">
                    <h3 className=" text-base leading-6"> { type == 'withdrawal' ? 'Cash withdrawal': metadata?.product_name} </h3>
                    <p className={` text-gray-400 text-sm ${ type == 'withdrawal' ? status === 'successful'  ? ' text-green-500':'text-yellow-500': '' }`}>{type == 'withdrawal' ? status : metadata?.name}</p>
                </div>
            </div>
            <div className=" text-right flex flex-col justify-between gap-1">
                <h3 className=" font-bold text-base">USD {amount}</h3>
                <p className=" text-xs font-medium text-gray-400">{date}</p>
            </div>
        </div>
    )
};

export default Transaction